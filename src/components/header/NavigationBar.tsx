import { ActionsSVG, CodeSVG, InsightsSVG, IssuesSVG, ProjectsSVG, PullRequestSVG, SecuritySVG, WikiSVG } from "../svg/all-svg";
import { default as styles } from "./NavigationBar.module.css";
import { NavLink, useLocation } from "react-router-dom";

export function NavigationBar() {
    const { navItemLink, navItem, borderBottomActive } = styles;
    const location = useLocation();


    return <div>
        <ul className="d-flex gap-10  pt-lg  f-wrap">
            <li className={`p-sm ${location.pathname === `/code` && borderBottomActive}`}>
                <NavLink to="/code" className={`d-flex ${navItemLink} ai-center`}>
                    <CodeSVG />
                    <span className="ml-sm text-small">
                        Code
                    </span>
                </NavLink>
            </li>
            <li className={`p-sm ${navItem} ${location.pathname === `/issues` && borderBottomActive}`}>

                <NavLink to="/issues" className={`d-flex ${navItemLink} `}>
                    <IssuesSVG />
                    <span className="ml-sm text-small">
                        Issues
                    </span>
                    <span
                        className="ml-sm notifications-counter "
                    >
                        786
                    </span>
                </NavLink>
            </li>
            <li className={`p-sm ${navItem} ${location.pathname === `/pull-requests` && borderBottomActive}`}>
                <NavLink to="/pull-requests" className={`d-flex ${navItemLink} ai-center`}>
                    <PullRequestSVG />
                    <span className="ml-sm text-small">
                        Pull Requests
                    </span>

                </NavLink>
            </li>
            <li className={`p-sm ${location.pathname === `/actions` && borderBottomActive}`}>

                <NavLink to="/actions" className={`d-flex ${navItemLink} ai-center`}>
                    <ActionsSVG />
                    <span className="ml-sm text-small">
                        Actions
                    </span>
                </NavLink>
            </li>
            <li className={`p-sm ${location.pathname === `/projects` && borderBottomActive}`}>

                <NavLink to="/projects" className={`d-flex ${navItemLink} ai-center`}>
                    <ProjectsSVG />
                    <span className="ml-sm text-small">
                        Projects
                    </span>
                </NavLink>
            </li>
            <li className={`p-sm ${location.pathname === `/wiki` && borderBottomActive}`}>

                <NavLink to="/wiki" className={`d-flex ${navItemLink} ai-center`}>
                    <WikiSVG />
                    <span className="ml-sm text-small">
                        Wiki
                    </span>
                </NavLink>
            </li>
            <li className={`p-sm ${location.pathname === `/security` && borderBottomActive}`}>

                <NavLink to="/security" className={`d-flex ${navItemLink} ai-center`}>
                    <SecuritySVG />
                    <span className="ml-sm text-small">
                        Security
                    </span>
                </NavLink>
            </li>
            <li className={`p-sm ${location.pathname === `/insights` && borderBottomActive}`}>

                <NavLink to="/insights" className={`d-flex ${navItemLink} ai-center`}>
                    <InsightsSVG />
                    <span className="ml-sm text-small">
                        Insights
                    </span>
                </NavLink>
            </li>

        </ul>
    </div>

}
