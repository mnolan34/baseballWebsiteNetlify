import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>Medford Mustangs</Title>
      <h2>Team Roster</h2>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://www.linkedin.com/in/matthew-nolan-91548b114/" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn more about the developer
      </p>
    </main>
  );
}
