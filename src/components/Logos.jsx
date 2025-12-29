import Container from "./Container";

export default function Logos() {
  return (
    <section className="py-20 bg-slate-900/40">
      <Container>
        <p className="text-center text-gray-400 mb-8">
          Trusted by innovative teams
        </p>

        <div className="flex justify-center gap-12 flex-wrap text-lg font-semibold opacity-70">
          <span>FinTechCo</span>
          <span>SaaSify</span>
          <span>StartupX</span>
          <span>CloudBase</span>
        </div>
      </Container>
    </section>
  );
}
