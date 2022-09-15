
import { PageHeadActions } from "./PageHeadActions";
import { RepoTitle } from "./RepoTitle";

export function Summary() {

    return <div className="d-flex f-wrap gap-10">
        <RepoTitle />
        <PageHeadActions />
    </div>
}

