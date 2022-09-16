import { default as styles } from "./Loader.module.css";
const Loader = () => {
    const { loader } = styles;
    return <div className={`${loader}`}></div>
}
export { Loader }