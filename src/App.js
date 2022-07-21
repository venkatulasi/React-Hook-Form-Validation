import "./styles.css";
import content from "./inputs";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required().min(5)
});

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => console.log(data);
  return (
    <div className="App">
      <h1>React-Hook-Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {content.inputs.map((input, key) => {
          return (
            <div key={key}>
              <p>
                <label className="lable">{input.lable}</label>
              </p>
              <p>
                <input
                  name={input.name}
                  type={input.type}
                  className="input"
                  {...register("age")}
                />
              </p>
              <p className="messages"> {errors[input.name]?.message}</p>
            </div>
          );
        })}
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
