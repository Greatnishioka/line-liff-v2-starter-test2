export default function answers({className,question_title,answers =[]}) {

    return (
        <div className={className}>
            <div className="question_component">
                <div className="question_container">
                    <h2 className="question_title_text">
                        {question_title}
                    </h2>
                </div>
                <div className="answer-flex">
                    {answers.map((answer, index) => (
                        <input 
                            key={index} 
                            className="answer-button" 
                            type="button" 
                            value={answer} 
                        />
                    ))}
                    <div className="others-input">
                        <p className="others-caption">他：</p><input className="others-text" />
                    </div>
                </div>
            </div>
        </div>
        );
    }