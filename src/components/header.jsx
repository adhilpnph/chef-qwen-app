import chefIcon from "../assets/chef-icon.jpg"
export default function Header(){
    return(
        <header>
            <img src={chefIcon} alt="ChefQwenLogo" />
            <h1>Chef Qwen</h1>
        </header>
    )
}