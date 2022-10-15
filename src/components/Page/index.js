import { Menu } from "../Menu";
import { Topbar } from "../Topbar";
import { PageWrapper } from "./styles";

export const Page = (props) => (
    
    <>
        <Topbar />
        <PageWrapper>
            {props.children}
        </PageWrapper>
        <Menu />
    </>
)