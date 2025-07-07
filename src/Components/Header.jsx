import cheficon from '../assets/images/cheficon.png';

export default function HeaderBar() {
    return (
        <header className="header-bar">
            <img src={cheficon} alt="chef icon" />
            <h1>Chef Bot</h1>
        </header>
    );
}
