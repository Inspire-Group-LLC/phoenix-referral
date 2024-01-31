import React, { useState } from "react";
import './Main.scss';
import BalanceBlock from "./BalanceBlock/BalanceBlock";
import NavBar from "./NavBar/NavBar";
import Button from "./Button/Button";
import Statistics from "./Statistics/Statistics";
import Slider from "./Slider/Slider";
import Monitoring from "./Monitoring/Monitoring";
import Links from "./Links/Links";
import SmallBtn from "./SmallBtn/SmallBtn";
import BigBtn from "./BigBtn/BigBtn";
import Modal from "./Modal/Modal";
import Input from "./Input/Input";
import Select from "./Select/Select";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../router/Route";

const Main = () => {
    const [modal, setModal] = useState(false);
    const navigation = useNavigate();

    return (
        <div className="main">
            <div className="container">
                <NavBar />
                <div className="content">
                    <div className="row">
                        <div className='mobile-col'>
                            <BalanceBlock />
                        </div>
                        <div className="lil-btns">
                            <SmallBtn>
                                <p>
                                    Гайды {5}
                                </p>
                                <svg width="23" height="23" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30ZM9.875 15.9375C9.875 15.6614 9.65114 15.4375 9.375 15.4375C9.09886 15.4375 8.875 15.6614 8.875 15.9375V18.1875C8.875 18.6365 9.07365 19.055 9.40663 19.3546C9.73788 19.6528 10.1769 19.8125 10.625 19.8125H19.375C19.8231 19.8125 20.2621 19.6528 20.5934 19.3546C20.9264 19.055 21.125 18.6365 21.125 18.1875V15.9375C21.125 15.6614 20.9011 15.4375 20.625 15.4375C20.3489 15.4375 20.125 15.6614 20.125 15.9375V18.1875C20.125 18.3352 20.0603 18.4891 19.9244 18.6113C19.7868 18.7352 19.5899 18.8125 19.375 18.8125H10.625C10.4101 18.8125 10.2132 18.7352 10.0756 18.6113C9.93975 18.4891 9.875 18.3352 9.875 18.1875V15.9375ZM11.5034 12.7905C11.6881 12.5853 12.0042 12.5686 12.2095 12.7534L14.5 14.8148V15.9375C14.5 16.0843 14.5633 16.2164 14.6641 16.3078L11.5405 13.4966C11.3353 13.3119 11.3186 12.9958 11.5034 12.7905ZM15.5 14.8148L15 15.2648L14.5 14.8148V9.1875C14.5 8.91136 14.7239 8.6875 15 8.6875C15.2761 8.6875 15.5 8.91136 15.5 9.1875V14.8148ZM15.3359 16.3078C15.4367 16.2164 15.5 16.0843 15.5 15.9375V14.8148L17.7905 12.7534C17.9958 12.5686 18.3119 12.5853 18.4966 12.7905C18.6814 12.9958 18.6647 13.3119 18.4595 13.4966L15.3359 16.3078ZM15 16.4375C15.1197 16.4375 15.2394 16.3947 15.3345 16.3091L15.3359 16.3078C15.2472 16.3884 15.1293 16.4375 15 16.4375ZM14.6655 16.3091C14.665 16.3087 14.6646 16.3083 14.6641 16.3078L14.6655 16.3091Z" fill="white" />
                                </svg>
                            </SmallBtn>
                            <SmallBtn style={{ cursor: 'pointer' }} onClick={() => setModal(true)}>
                                <p>
                                    Создать ссылку
                                </p>
                                <svg width="23" height="23" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 6.25V23.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M6.25 15H23.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </SmallBtn>
                            <SmallBtn style={{cursor: 'pointer'}} onClick={()=>navigation(APP_ROUTES.REFERENCES)}>
                                <p >
                                    Cсылки {16}
                                </p>
                            </SmallBtn>
                        </div>
                        <div className="lil-btns-mobile mobile-col">
                            <SmallBtn>
                                <p>
                                    Гайды {5}
                                </p>
                                <svg width="23" height="23" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30ZM9.875 15.9375C9.875 15.6614 9.65114 15.4375 9.375 15.4375C9.09886 15.4375 8.875 15.6614 8.875 15.9375V18.1875C8.875 18.6365 9.07365 19.055 9.40663 19.3546C9.73788 19.6528 10.1769 19.8125 10.625 19.8125H19.375C19.8231 19.8125 20.2621 19.6528 20.5934 19.3546C20.9264 19.055 21.125 18.6365 21.125 18.1875V15.9375C21.125 15.6614 20.9011 15.4375 20.625 15.4375C20.3489 15.4375 20.125 15.6614 20.125 15.9375V18.1875C20.125 18.3352 20.0603 18.4891 19.9244 18.6113C19.7868 18.7352 19.5899 18.8125 19.375 18.8125H10.625C10.4101 18.8125 10.2132 18.7352 10.0756 18.6113C9.93975 18.4891 9.875 18.3352 9.875 18.1875V15.9375ZM11.5034 12.7905C11.6881 12.5853 12.0042 12.5686 12.2095 12.7534L14.5 14.8148V15.9375C14.5 16.0843 14.5633 16.2164 14.6641 16.3078L11.5405 13.4966C11.3353 13.3119 11.3186 12.9958 11.5034 12.7905ZM15.5 14.8148L15 15.2648L14.5 14.8148V9.1875C14.5 8.91136 14.7239 8.6875 15 8.6875C15.2761 8.6875 15.5 8.91136 15.5 9.1875V14.8148ZM15.3359 16.3078C15.4367 16.2164 15.5 16.0843 15.5 15.9375V14.8148L17.7905 12.7534C17.9958 12.5686 18.3119 12.5853 18.4966 12.7905C18.6814 12.9958 18.6647 13.3119 18.4595 13.4966L15.3359 16.3078ZM15 16.4375C15.1197 16.4375 15.2394 16.3947 15.3345 16.3091L15.3359 16.3078C15.2472 16.3884 15.1293 16.4375 15 16.4375ZM14.6655 16.3091C14.665 16.3087 14.6646 16.3083 14.6641 16.3078L14.6655 16.3091Z" fill="white" />
                                </svg>
                            </SmallBtn>
                            <SmallBtn style={{ cursor: 'pointer' }} onClick={() => setModal(true)}>
                                <p>
                                    Cсылки {16}
                                </p>
                                <svg width="23" height="23" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 6.25V23.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M6.25 15H23.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </SmallBtn>
                            <SmallBtn>
                                Мониторинг {15}
                                <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5405 25C19.4665 25 25.0811 19.4036 25.0811 12.5C25.0811 5.59644 19.4665 0 12.5405 0C5.61459 0 0 5.59644 0 12.5C0 19.4036 5.61459 25 12.5405 25ZM6.33217 12.5C6.38482 12.5868 6.44543 12.684 6.51383 12.7896C6.81435 13.2534 7.25895 13.8694 7.83474 14.4815C9.00432 15.7251 10.5979 16.8333 12.5405 16.8333C14.4832 16.8333 16.0768 15.7251 17.2463 14.4815C17.8221 13.8694 18.2667 13.2534 18.5672 12.7896C18.6357 12.684 18.6963 12.5868 18.7489 12.5C18.6963 12.4132 18.6357 12.316 18.5672 12.2104C18.2667 11.7466 17.8221 11.1306 17.2463 10.5185C16.0768 9.27493 14.4832 8.16667 12.5405 8.16667C10.5979 8.16667 9.00432 9.27493 7.83474 10.5185C7.25895 11.1306 6.81435 11.7466 6.51383 12.2104C6.44543 12.316 6.38482 12.4132 6.33217 12.5ZM19.8977 12.5C20.7915 12.0516 20.7913 12.0513 20.7912 12.051L20.7908 12.0502L20.7898 12.0482L20.787 12.0428L20.7786 12.0263L20.7697 12.0091L20.7497 11.9712C20.7252 11.925 20.69 11.8602 20.6445 11.7794C20.5533 11.6179 20.42 11.392 20.2457 11.1229C19.8983 10.5867 19.3815 9.86936 18.7032 9.14821C17.3647 7.72507 15.2797 6.16667 12.5405 6.16667C9.8014 6.16667 7.7164 7.72507 6.37788 9.14821C5.69961 9.86936 5.18277 10.5867 4.83536 11.1229C4.66103 11.392 4.52774 11.6179 4.43663 11.7794C4.39104 11.8602 4.3559 11.925 4.33136 11.9712C4.31909 11.9943 4.30946 12.0128 4.3025 12.0263L4.29404 12.0428L4.29131 12.0482L4.29032 12.0502L4.28992 12.051C4.28974 12.0513 4.28958 12.0516 5.18342 12.5L4.28958 12.0516C4.14804 12.3338 4.14804 12.6662 4.28958 12.9484L5.18342 12.5C4.28958 12.9484 4.28974 12.9487 4.28992 12.949L4.29032 12.9498L4.29131 12.9518L4.29404 12.9572L4.3025 12.9737C4.30946 12.9872 4.31909 13.0057 4.33136 13.0288C4.3559 13.075 4.39104 13.1398 4.43663 13.2206C4.52774 13.3821 4.66103 13.608 4.83536 13.8771C5.18277 14.4133 5.69961 15.1306 6.37788 15.8518C7.7164 17.2749 9.8014 18.8333 12.5405 18.8333C15.2797 18.8333 17.3647 17.2749 18.7032 15.8518C19.3815 15.1306 19.8983 14.4133 20.2457 13.8771C20.42 13.608 20.5533 13.3821 20.6445 13.2206C20.69 13.1398 20.7252 13.075 20.7497 13.0288C20.762 13.0057 20.7716 12.9872 20.7786 12.9737L20.787 12.9572L20.7898 12.9518L20.7908 12.9498L20.7912 12.949C20.7913 12.9487 20.7915 12.9484 19.8977 12.5ZM19.8977 12.5L20.7915 12.9484C20.933 12.6662 20.933 12.3338 20.7915 12.0516L19.8977 12.5ZM12.5405 11.5C11.9816 11.5 11.5341 11.9508 11.5341 12.5C11.5341 13.0492 11.9816 13.5 12.5405 13.5C13.0995 13.5 13.547 13.0492 13.547 12.5C13.547 11.9508 13.0995 11.5 12.5405 11.5ZM9.53405 12.5C9.53405 10.8401 10.8832 9.5 12.5405 9.5C14.1979 9.5 15.547 10.8401 15.547 12.5C15.547 14.1599 14.1979 15.5 12.5405 15.5C10.8832 15.5 9.53405 14.1599 9.53405 12.5Z" fill="white" />
                                </svg>

                            </SmallBtn>
                            <SmallBtn>
                                <p>Статистика</p>
                                <p>{80}%</p>
                                <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5405 25C19.4665 25 25.0811 19.4036 25.0811 12.5C25.0811 5.59644 19.4665 0 12.5405 0C5.61459 0 0 5.59644 0 12.5C0 19.4036 5.61459 25 12.5405 25ZM16.5503 8.5C16.5503 7.94772 16.1025 7.5 15.5503 7.5C14.998 7.5 14.5503 7.94772 14.5503 8.5V16.5C14.5503 17.0523 14.998 17.5 15.5503 17.5C16.1025 17.5 16.5503 17.0523 16.5503 16.5V8.5ZM13.5405 11.5C13.5405 10.9477 13.0928 10.5 12.5405 10.5C11.9882 10.5 11.5405 10.9477 11.5405 11.5V16.5C11.5405 17.0523 11.9882 17.5 12.5405 17.5C13.0928 17.5 13.5405 17.0523 13.5405 16.5V11.5ZM9.53079 13.5C10.0831 13.5 10.5308 13.9477 10.5308 14.5V16.5C10.5308 17.0523 10.0831 17.5 9.53079 17.5C8.97851 17.5 8.53079 17.0523 8.53079 16.5V14.5C8.53079 13.9477 8.97851 13.5 9.53079 13.5Z" fill="white" />
                                </svg>


                            </SmallBtn>
                        </div>
                        <div className="big-btns">
                            <BigBtn style={{cursor: 'pointer'}} onClick={()=>navigation(APP_ROUTES.MONITORING)} >
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50ZM11.4703 25C11.6255 25.2745 11.8537 25.6614 12.1525 26.1241C12.775 27.088 13.6973 28.3706 14.8962 29.6494C17.3122 32.2264 20.7328 34.6667 25 34.6667C29.2672 34.6667 32.6878 32.2264 35.1038 29.6494C36.3027 28.3706 37.225 27.088 37.8475 26.1241C38.1463 25.6614 38.3745 25.2745 38.5297 25C38.3745 24.7255 38.1463 24.3386 37.8475 23.8759C37.225 22.912 36.3027 21.6294 35.1038 20.3506C32.6878 17.7736 29.2672 15.3333 25 15.3333C20.7328 15.3333 17.3122 17.7736 14.8962 20.3506C13.6973 21.6294 12.775 22.912 12.1525 23.8759C11.8537 24.3386 11.6255 24.7255 11.4703 25ZM39.6667 25C40.5611 24.5528 40.5609 24.5524 40.5607 24.5521L40.5602 24.5511L40.5589 24.5484L40.5547 24.5401L40.5404 24.5122L40.5219 24.4764L40.4884 24.4125C40.4432 24.3272 40.3773 24.2051 40.2908 24.0514C40.118 23.7441 39.8628 23.3099 39.5275 22.7908C38.8584 21.7546 37.864 20.3706 36.5629 18.9827C33.9789 16.2264 30.0662 13.3333 25 13.3333C19.9338 13.3333 16.0211 16.2264 13.4371 18.9827C12.136 20.3706 11.1416 21.7546 10.4725 22.7908C10.1372 23.3099 9.88199 23.7441 9.70915 24.0514C9.6227 24.2051 9.55675 24.3272 9.51163 24.4125C9.48907 24.4551 9.4717 24.4886 9.45957 24.5122L9.4453 24.5401L9.44112 24.5484L9.43976 24.5511L9.43927 24.5521C9.43908 24.5524 9.43891 24.5528 10.3333 25L9.43891 24.5528C9.29814 24.8343 9.29814 25.1657 9.43891 25.4472L10.3333 25C9.43891 25.4472 9.43908 25.4476 9.43927 25.4479L9.43976 25.4489L9.44112 25.4516L9.4453 25.4599L9.45957 25.4878C9.4717 25.5114 9.48907 25.5449 9.51163 25.5875C9.55675 25.6728 9.6227 25.7949 9.70915 25.9486C9.88199 26.2559 10.1372 26.6902 10.4725 27.2092C11.1416 28.2454 12.136 29.6294 13.4371 31.0173C16.0211 33.7736 19.9338 36.6667 25 36.6667C30.0662 36.6667 33.9789 33.7736 36.5629 31.0173C37.864 29.6294 38.8584 28.2454 39.5275 27.2092C39.8628 26.6902 40.118 26.2559 40.2908 25.9486C40.3773 25.7949 40.4432 25.6728 40.4884 25.5875C40.5109 25.5449 40.5283 25.5114 40.5404 25.4878L40.5547 25.4599L40.5589 25.4516L40.5602 25.4489L40.5607 25.4479C40.5609 25.4476 40.5611 25.4472 39.6667 25ZM39.6667 25L40.5611 25.4472C40.7019 25.1657 40.7019 24.8343 40.5611 24.5528L39.6667 25ZM25 22C23.3431 22 22 23.3431 22 25C22 26.6569 23.3431 28 25 28C26.6569 28 28 26.6569 28 25C28 23.3431 26.6569 22 25 22ZM20 25C20 22.2386 22.2386 20 25 20C27.7614 20 30 22.2386 30 25C30 27.7614 27.7614 30 25 30C22.2386 30 20 27.7614 20 25Z" fill="white" />
                                </svg>
                                <p>Мониторинг</p>
                                <p>{15}</p>
                            </BigBtn>
                            <BigBtn>
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50ZM32 17C32 16.4477 31.5523 16 31 16C30.4477 16 30 16.4477 30 17V33C30 33.5523 30.4477 34 31 34C31.5523 34 32 33.5523 32 33V17ZM26 23C26 22.4477 25.5523 22 25 22C24.4477 22 24 22.4477 24 23V33C24 33.5523 24.4477 34 25 34C25.5523 34 26 33.5523 26 33V23ZM19 28C19.5523 28 20 28.4477 20 29V33C20 33.5523 19.5523 34 19 34C18.4477 34 18 33.5523 18 33V29C18 28.4477 18.4477 28 19 28Z" fill="white" />
                                </svg>

                                <p>Статистика</p>
                                <p>{80}%</p>
                            </BigBtn>
                        </div>
                    </div>
                    <div className="row">
                        <div className="mobile-col">
                            <Statistics></Statistics>

                        </div>
                        <div className='mobile-col'>
                            <Slider></Slider>
                        </div>
                    </div>
                    <div className="row">
                        <div className="links-comp">
                            <Links></Links>
                        </div>
                        <div className="monitor-comp">
                            <Monitoring></Monitoring>
                        </div>
                    </div>
                </div>
            </div>

            <Modal visible={modal} setVisible={setModal}>
                <h2>Создание реферальной ссылки</h2>

                <div className="modal-text-inputs">
                    <div className="modal-text-inputs-els">
                        <div className="modal-text-inputs-el">
                            <p>Выбор категории</p>
                            <Select
                                // value={}
                                // onChange={}
                                defaultValue="Категория"
                                options={[
                                    { value: "category1", name: "Category1" },
                                    { value: "category2", name: "Category2" },
                                ]}
                            ></Select>
                        </div>
                        <div className="modal-text-inputs-el">
                            <p>Выбор товара</p>
                            <Select
                                // value={}
                                // onChange={}
                                defaultValue="Товары"
                                options={[
                                    { value: "product1", name: "Product1" },
                                    { value: "product2", name: "Product2" },
                                ]}
                            ></Select>
                        </div>
                        <div className="modal-text-inputs-el">
                            <p>Название ссылки</p>

                            <Input type=""
                                // value={}
                                // onChange={(e) => setPost({ ...post, body: e.target.value })}
                                placeholder="Название" ></Input>
                        </div>
                        <div className="modal-text-inputs-el">
                            <button className="modal-createLink-btn">
                                Создать
                            </button>
                        </div>
                    </div>

                </div>


            </Modal>
        </div>
    )
}

export default Main;