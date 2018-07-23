import React, {Component} from 'react';
import QuestionText from "./QuestionText/QuestionText";
import QuestionChoice from "./QuestionChoice/QuestionChoice";

class Questions extends Component {
    render() {
        const details = this.props.details
        return (
            <div style={{minHeight:'200px', position: 'relative'}}>
                {details.surveys_type_id === 0 ?
                    <QuestionText idSurvey={details.id} questions={details.questions}/> :
                    <QuestionChoice idSurvey={details.id} questions={details.questions}/>
                }
            </div>
        );
    }
}

export default Questions;