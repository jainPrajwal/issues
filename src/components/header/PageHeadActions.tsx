import { ForkSVG, StarSVG, WatchSVG } from "../svg/all-svg"

export function PageHeadActions() {
  return <div className="wrapper-page-head-actions d-flex gap-10 ai-center ml-auto f-wrap">
    <button className="btn btn-icon d-flex gap-10 ai-center">
      <div className="d-flex gap-10 ai-center">

        <WatchSVG />
        <span className="text-small">Watch</span>
      </div>
      <span
        className="text-small notifications-counter"
      >6.7K</span>
      <span className="dropdown-caret"></span>
    </button>
    <button className="btn btn-icon d-flex gap-10 ai-center">
      <div className="d-flex gap-10 ai-center">

        <ForkSVG />
        <span className="text-small">Fork</span>
      </div>
      <span
        className="text-small notifications-counter"
      >6.7K</span>
      <span className="dropdown-caret"></span>
    </button>
    <button className="btn btn-icon d-flex gap-10 ai-center">
      <div className="d-flex gap-10 ai-center">

        <StarSVG />
        <span className="text-small">Starred</span>
      </div>
      <span
        className="text-small notifications-counter"
      >42</span>
      <span className="dropdown-caret"></span>
    </button>
  </div>
}

