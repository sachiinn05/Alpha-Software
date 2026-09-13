import { useEffect, useRef } from "react";
import * as THREE from "three";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";

function seeded(n) {
  const x = Math.sin(n * 999.7) * 43758.5453;
  return x - Math.floor(x);
}

function buildScene(mobile) {
  const group = new THREE.Group();
  group.scale.setScalar(mobile ? 1.05 : 1.15);
  group.position.x = mobile ? 0.2 : 1.35;

  const core = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.15, 1),
    new THREE.MeshStandardMaterial({
      color: "#e4c98a",
      metalness: 0.62,
      roughness: 0.18,
      emissive: "#6b5428",
      emissiveIntensity: 0.22,
    })
  );
  group.add(core);

  const inner = new THREE.Mesh(
    new THREE.OctahedronGeometry(1, 0),
    new THREE.MeshStandardMaterial({
      color: "#b7e4ec",
      metalness: 0.35,
      roughness: 0.16,
      emissive: "#1f3d42",
      emissiveIntensity: 0.35,
    })
  );
  inner.scale.setScalar(0.52);
  group.add(inner);

  const wire = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.4, 1),
    new THREE.MeshBasicMaterial({
      color: "#e4c98a",
      wireframe: true,
      transparent: true,
      opacity: 0.34,
    })
  );
  group.add(wire);

  const rings = [
    { r: 1.85, rot: [Math.PI / 2.4, 0.2, 0], color: "#c4a46a", opacity: 0.75, tube: 0.01 },
    { r: 2.2, rot: [0.4, Math.PI / 3, 0.5], color: "#8ec8d4", opacity: 0.5, tube: 0.007 },
    { r: 2.55, rot: [1.1, 0.6, 0.2], color: "#f3efe4", opacity: 0.22, tube: 0.005 },
  ].map((cfg) => {
    const mesh = new THREE.Mesh(
      new THREE.TorusGeometry(cfg.r, cfg.tube, 12, mobile ? 64 : 128),
      new THREE.MeshBasicMaterial({ color: cfg.color, transparent: true, opacity: cfg.opacity })
    );
    mesh.rotation.set(...cfg.rot);
    group.add(mesh);
    return mesh;
  });

  const count = mobile ? 90 : 260;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i += 1) {
    const r = 2.4 + seeded(i + 1) * 3.2;
    const theta = seeded(i + 41) * Math.PI * 2;
    const phi = Math.acos(2 * seeded(i + 83) - 1);
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.62;
    positions[i * 3 + 2] = r * Math.cos(phi);
  }
  const points = new THREE.Points(
    new THREE.BufferGeometry().setAttribute("position", new THREE.BufferAttribute(positions, 3)),
    new THREE.PointsMaterial({
      size: mobile ? 0.018 : 0.014,
      color: "#c4a46a",
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true,
      depthWrite: false,
    })
  );
  group.add(points);

  return { group, core, inner, rings, points };
}

export default function HeroCanvas() {
  const wrapRef = useRef(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const el = wrapRef.current;
    if (!el || reduced) return undefined;

    const mobile = window.matchMedia("(max-width: 767px)").matches;
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x05070a, 10, 22);

    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 40);
    camera.position.set(0, 0.15, 5.6);

    const renderer = new THREE.WebGLRenderer({
      antialias: !mobile,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setClearColor(0x05070a, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, mobile ? 1.2 : 1.6));
    el.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 0.22));
    const key = new THREE.DirectionalLight(0xfff6e4, 1.15);
    key.position.set(3.2, 4.2, 4);
    scene.add(key);
    const gold = new THREE.PointLight(0xe4c98a, 4.5, 10);
    gold.position.set(-1.6, 1.2, 3.2);
    scene.add(gold);
    const ice = new THREE.PointLight(0x8ec8d4, 2.4, 10);
    ice.position.set(2.8, 1.4, 1.4);
    scene.add(ice);

    const { group, core, inner, rings, points } = buildScene(mobile);
    scene.add(group);

    const pointer = { x: 0, y: 0 };
    const onMove = (e) => {
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    const resize = () => {
      const w = el.clientWidth || window.innerWidth;
      const h = el.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";
    };
    resize();
    window.addEventListener("resize", resize);

    let frame = 0;
    const tick = () => {
      const t = performance.now() * 0.001;
      const scroll = window.scrollY / Math.max(window.innerHeight, 1);

      group.rotation.y += 0.007;
      group.rotation.x = THREE.MathUtils.lerp(group.rotation.x, pointer.y * 0.16 + scroll * 0.35, 0.035);
      group.rotation.z = THREE.MathUtils.lerp(group.rotation.z, pointer.x * 0.07, 0.035);
      group.position.y = Math.sin(t * 0.35) * 0.08;
      group.position.x = THREE.MathUtils.lerp(
        group.position.x,
        (mobile ? 0.2 : 1.35) + pointer.x * 0.18,
        0.03
      );

      core.rotation.y -= 0.012;
      inner.rotation.y += 0.02;
      inner.rotation.z -= 0.008;
      rings[0].rotation.x += 0.004;
      rings[1].rotation.y -= 0.003;
      rings[2].rotation.z += 0.0025;
      points.rotation.y += 0.0015;

      camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 0.35, 0.04);
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, 0.15 - pointer.y * 0.2, 0.04);
      camera.position.z = THREE.MathUtils.lerp(camera.position.z, 6.1 + scroll * 1.05, 0.04);
      camera.lookAt(0.9, 0, 0);

      renderer.render(scene, camera);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("resize", resize);
      scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose());
          else obj.material.dispose();
        }
      });
      renderer.dispose();
      if (renderer.domElement.parentNode === el) el.removeChild(renderer.domElement);
    };
  }, [reduced]);

  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 flex items-center justify-center md:justify-end md:pr-[8%] pointer-events-none">
        <div className="relative h-[34vw] max-h-[420px] min-h-[200px] aspect-square">
          <div className="absolute inset-[22%] rounded-full bg-[radial-gradient(circle,rgba(196,164,106,0.12),transparent_70%)]" />
          <div className="absolute inset-[8%] rounded-full border border-gold/25 animate-[spin_28s_linear_infinite]" />
          <div className="absolute inset-[2%] rounded-full border border-ice/15 orbit-rev" />
          <div className="absolute inset-[28%] rotate-12 border border-gold/40" />
        </div>
      </div>
      {!reduced && <div ref={wrapRef} className="absolute inset-0" />}
    </div>
  );
}
