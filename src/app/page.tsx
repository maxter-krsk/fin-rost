import { Form } from "./components/sections/Home/form/Form";
import { Certificates } from "./components/sections/Home/certificates/Certificates";
import { ThankfulLetter } from "./components/sections/Home/thankful-letter/ThankfulLetter";
export default function Home() {
  return (
    <div>
      <h1 className="text-center uppercase">Главная страница</h1>
      <Form />
      <Certificates />
      <ThankfulLetter />
    </div>
  );
}
