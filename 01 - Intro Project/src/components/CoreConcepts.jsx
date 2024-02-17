import CoreConcept from "./CoreConcept/CoreConcept";
import { CORE_CONCEPTS } from "../data";

export default function CoreConcepts() {
    return (
        <section id="core-concepts">
        <h2>CoreConcepts</h2>
        <ul>
          {CORE_CONCEPTS.map((concept) => (
          <CoreConcept key={concept.title} {...concept} />
          ))}
        </ul>
      </section>
    );
}