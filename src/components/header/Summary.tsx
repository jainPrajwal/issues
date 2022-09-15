
import { PageHeadActions } from "./PageHeadActions";
import { RepoTitle } from "./RepoTitle";

export function Summary() {

    return <div className="d-flex">
        <RepoTitle />
        <PageHeadActions />
    </div>
}

