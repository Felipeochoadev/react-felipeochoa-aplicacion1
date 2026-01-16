import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import TabBar from '../../Shared/TabBar/TabBar';
import { DatosSimulados } from '../../Core/Core/Datos';
import './QuizPage.css';

const QuizPage = () => {
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState(null);
    const pregunta = DatosSimulados.preguntas[0];

    return (
        <div className="QuizPage_Container seleccion" id="QuizPage_Container">
            <div className="QuizPage_Header">
                <button className="QuizPage_Back" onClick={() => navigate(-1)}>
                    <ArrowLeft color="#333" size="1.5em" />
                </button>
                <div className="QuizPage_Steps">
                    {[1, 2, 3, 4, 5, 6, 7].map((s) => (
                        <div key={s} className={`QuizPage_Step ${s === 5 ? 'active' : ''}`}>{s}</div>
                    ))}
                </div>
            </div>

            <div className="QuizPage_Content">
                <div className="QuizPage_Card">
                    <h3 className="QuizPage_QuestionTitle">Lorem ipsum #5</h3>
                    <p className="QuizPage_QuestionEnunciado">{pregunta.enunciado}</p>
                    <div className="QuizPage_Options">
                        {pregunta.opciones.map((opt, idx) => (
                            <label key={idx} className="QuizPage_Option">
                                <input
                                    type="radio"
                                    name="quiz"
                                    checked={selectedOption === idx}
                                    onChange={() => setSelectedOption(idx)}
                                />
                                <span className="QuizPage_CustomRadio"></span>
                                <span className="QuizPage_OptionText">{opt}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div className="QuizPage_Nav">
                    <button className="QuizPage_NavBtn"><ChevronLeft /></button>
                    <button className="QuizPage_NavBtn active"><ChevronRight /></button>
                </div>

                <button className="QuizPage_Submit">
                    LOREM IPSUM
                </button>
            </div>

            <TabBar />
        </div>
    );
};

export default QuizPage;
