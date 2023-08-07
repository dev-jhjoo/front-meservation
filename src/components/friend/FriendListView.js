import style from './FriendListView.module.css';

function FriendListView() {
    return (
        <div className={style.container}>
            <h1>Meservation</h1>

            <div className={style.profile}>
                <div className={style.profileTwo}>
                    <div className={style.imgDiv}>
                        <img 
                            className={style.img}
                            alt="" 
                            src="https://avatars.githubusercontent.com/u/75109895?v=4"/>
                    </div>
                    <div className={style.infoDiv}>
                        <span>주지훈</span>
                        <p>현재 개발 진행중...!</p>
                    </div>
                </div>
            </div>

            <div className={style.list}>
                <div>
                    <div>
                        <img 
                            className={style.img}
                            alt="" 
                            src="https://avatars.githubusercontent.com/u/75109895?v=4"/>
                    </div>
                    <div>
                        <span>주지훈</span>
                        <p>현재 개발 진행중...!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FriendListView;