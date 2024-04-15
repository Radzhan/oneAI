import React, { useCallback, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";
import "./Main.scss";
import Footer from "../../components/Footer/Footer";
import { useAppDispatch, useAppSelector } from "../../app/GlobalStore/hooks";
import { Cards } from "../../store/OpenAISlice";
import { getCards } from "../../store/OpenAIThunks";

const Main = () => {
  const arrayWithCards = useAppSelector(Cards);
  const dispatch = useAppDispatch();

  const requestCards = useCallback(async () => {
    await dispatch(getCards());
  }, [dispatch]);

  useEffect(() => {
    requestCards().catch(console.error);
  }, [requestCards]);

  const createCard = arrayWithCards.map((element) => {
    return <Card key={element._id} name={element.name} src={element.image} />;
  });

  return (
    <>
      <Navbar />
      <div className="card-group container">{createCard.length === 0 ? 'нет карточек' : createCard}</div>
      <Footer />
    </>
  );
};

export default Main;
