import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Atom, Star, User } from 'lucide-react';
import TabBar from '../../Shared/TabBar/TabBar';
import './ReviewsPage.css';

const ReviewsPage = () => {
    const navigate = useNavigate();

    const reviews = [
        { id: 1, name: 'Dolor sit amet', rating: 5, date: '22-03-2019', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut?' },
        { id: 2, name: 'Dolor sit amet', rating: 4, date: '21-03-2019', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut?' },
    ];

    return (
        <div className="ReviewsPage_Container seleccion" id="ReviewsPage_Container">
            <div className="ReviewsPage_Header">
                <button className="ReviewsPage_Back" onClick={() => navigate(-1)}>
                    <ArrowLeft color="white" size="1.5em" />
                </button>
                <div className="ReviewsPage_Hero">
                    <Atom size="6em" color="white" opacity="0.9" />
                    <div className="ReviewsPage_HeroText">
                        <h3>LOREM IPSUM</h3>
                        <p>90 HOURS 4.9</p>
                        <div className="ReviewsPage_Stars">
                            {[1, 2, 3, 4, 5].map(s => <Star key={s} size="1.2em" fill="white" color="white" />)}
                        </div>
                    </div>
                </div>
            </div>

            <div className="ReviewsPage_Content">
                <div className="ReviewsPage_Description">
                    <h4>LOREM IPSUM DOLOR</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut?
                    </p>
                </div>

                <div className="ReviewsPage_List">
                    {reviews.map(review => (
                        <div key={review.id} className="ReviewsPage_Item">
                            <div className="ReviewsPage_ItemHeader">
                                <div className="ReviewsPage_Avatar">
                                    <User size="1.5em" color="#ccc" />
                                </div>
                                <div className="ReviewsPage_ItemInfo">
                                    <h5>{review.name}</h5>
                                    <div className="ReviewsPage_ItemStars">
                                        {[1, 2, 3, 4, 5].map(s => (
                                            <Star key={s} size="0.8em" fill={s <= review.rating ? "#4158D0" : "none"} color="#4158D0" />
                                        ))}
                                    </div>
                                </div>
                                <span className="ReviewsPage_ItemDate">{review.date}</span>
                            </div>
                            <p className="ReviewsPage_ItemComment">{review.comment}</p>
                        </div>
                    ))}
                </div>
            </div>

            <TabBar />
        </div>
    );
};

export default ReviewsPage;
