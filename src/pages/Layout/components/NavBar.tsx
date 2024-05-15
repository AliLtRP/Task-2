import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../../../components/CustomButton";

const NavBar = () => {
  const navigator = useNavigate();

  return (
    <header>
      <nav className="mx-auto flex justify-between items-center py-4 bg-transparent">
        <Link to="/" className="flex justify-center items-center">
          <div className="object-contain">Logo</div>
        </Link>

        <CustomButton
          title="Sign in"
          buttonType="button"
          style="text-primary-blue rounded-full bg-white min-w-[130px]"
          handleClick={() => navigator("/sign-in")}
        />
      </nav>
    </header>
  );
};

export default NavBar;
