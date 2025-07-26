import logo from '/public/assets/food-serving.png';

export default function Header() {
    return (
        <header className="app-header">
            <nav>
                <img src={logo} alt="A robot chef" />
                <span>Chef Claude</span>
            </nav>
        </header>
    )
}