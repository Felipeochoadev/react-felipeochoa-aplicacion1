import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Atom } from 'lucide-react';
import './SubjectDetailPage.css';

const SubjectDetailPage = () => {
    const navigate = useNavigate();

    return (
        <div className="SubjectDetailPage_Container seleccion" id="SubjectDetailPage_Container">
            <div className="SubjectDetailPage_Header">
                <button
                    className="SubjectDetailPage_Back"
                    onClick={() => navigate(-1)}
                >
                    <ArrowLeft color="white" size="1.5em" />
                </button>
                <div className="SubjectDetailPage_MainIcon">
                    <Atom size="8em" color="white" opacity="0.9" />
                </div>
                <h1 className="SubjectDetailPage_Title">PHYSICS</h1>
            </div>

            <div className="SubjectDetailPage_Content">
                <div className="SubjectDetailPage_Stats">
                    <div className="SubjectDetailPage_StatCard">
                        <h3>12</h3>
                        <span>CHAPTERS</span>
                    </div>
                    <div className="SubjectDetailPage_StatCard">
                        <h3>30</h3>
                        <span>TESTS</span>
                    </div>
                </div>

                <div className="SubjectDetailPage_Description">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>

                <button className="SubjectDetailPage_Button" onClick={() => navigate('/lessons')}>
                    SEE ALL CHAPTERS
                </button>
            </div>

        </div>
    );
};

export default SubjectDetailPage;
