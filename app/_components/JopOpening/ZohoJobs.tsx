"use client";

import { useEffect } from "react";
import { headContent, scripts } from "./zohoJobsScript";

function ZohoJobs() {
  useEffect(() => {
    // document.body.innerHTML = document.body.innerHTML + scripts;
    // document.head.innerHTML = document.head.innerHTML + headContent;
    const head = document.head;
    const body = document.body;

    head.insertAdjacentHTML("beforeend", headContent);
    body.insertAdjacentHTML("beforeend", scripts);
  }, []);

  return (
    <div className="embed_jobs_head embed_jobs_with_style_3">
      <div className="embed_jobs_head2">
        <div className="embed_jobs_head3">
          <div id="rec_job_listing_div"></div>
        </div>
      </div>
    </div>
  );
}

export default ZohoJobs;
