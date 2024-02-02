import { Part } from "./Part.jsx";

export const Content = ({section1, ex1, section2, ex2, section3, ex3}) => {
    return (
        <div>
            <Part block={section1} exer={ex1}/>
            <Part block={section2} exer={ex2}/>
            <Part block={section3} exer={ex3}/>
        </div>
    );
}