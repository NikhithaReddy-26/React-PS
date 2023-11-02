import { Image } from "../../components/atoms/Image"
import { SignInTemplate } from "../../components/templates/SignIn"
import image from "../../../public/images/Privacy policy-pana (1) 2.svg"
import { SignIn } from "../../components/organisms/SignIn"
export const SigninPage=()=>{
    return(
        <SignInTemplate leftbar={<Image src={image}/>} rightbar={<SignIn/>}/>
    )
}