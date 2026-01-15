import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Play, SkipBack, SkipForward } from 'lucide-react';
import './LessonDetailPage.css';

const LessonDetailPage = () => {
    const navigate = useNavigate();

    return (
        <div className="LessonDetailPage_Container seleccion" id="LessonDetailPage_Container">
            <div className="LessonDetailPage_Header">
                <button className="LessonDetailPage_Back" onClick={() => navigate(-1)}>
                    <ArrowLeft color="white" size="1.5em" />
                </button>
                <div className="LessonDetailPage_HeaderRight" onClick={() => navigate('/reviews')}>
                    <span className="LessonDetailPage_HeaderTitle">LESSON #1</span>
                </div>
            </div>

            <div className="LessonDetailPage_MainContent">
                <div className="LessonDetailPage_VideoCard">
                    <div className="LessonDetailPage_Player">
                        <div className="LessonDetailPage_PlayButton">
                            <Play size="3em" fill="white" />
                        </div>
                        <div className="LessonDetailPage_Controls">
                            <SkipBack size="1.2em" />
                            <div className="LessonDetailPage_Progress" />
                            <SkipForward size="1.2em" />
                        </div>
                    </div>
                    <div className="LessonDetailPage_VideoTitle">
                        <h3>Lorem ipsum Dolor</h3>
                    </div>
                </div>

                <div className="LessonDetailPage_Content">
                    <div className="LessonDetailPage_Section">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <ul className="LessonDetailPage_Points">
                            <li>Lorem ipsum dolor sit amet, adipiscing elit, sed diam nonummy nibh euismod tincidunt ut?</li>
                            <li>Lorem ipsum dolor sit amet, adipiscing elit, sed diam nonummy nibh euismod tincidunt ut?</li>
                            <li>Lorem ipsum dolor sit amet, adipiscing elit, sed diam nonummy nibh euismod tincidunt ut?</li>
                        </ul>
                    </div>

                    <button className="LessonDetailPage_QuizBtn" onClick={() => navigate('/quiz')}>
                        TAKE QUIZ
                    </button>
                </div>
            </div>

        </div>
    );
};

export default LessonDetailPage;
