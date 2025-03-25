"use client";

import { useEffect } from "react";

function ZohoJobs() {
  useEffect(() => {
    const container = document.getElementById("zoho-jobs");
    if (!container) return;

    container.innerHTML = `
		<link
		rel="stylesheet"
		href="https://static.zohocdn.com/recruit/embed_careers_site/css/v1.1/embed_jobs.css"
		type="text/css"
		/>
		<div class="embed_jobs_head embed_jobs_with_style_3 embed_jobs_with_style">
		<div class="embed_jobs_head2">
			<div class="embed_jobs_head3">
			<div id="rec_job_listing_div"></div>
			<script
				type="text/javascript"
				src="https://static.zohocdn.com/recruit/embed_careers_site/javascript/v1.1/embed_jobs.js"
			></script>
			<script type="text/javascript">
				rec_embed_js.load({
				widget_id: "rec_job_listing_div",
				page_name: "Careers",
				source: "CareerSite",
				site: "https://reference-agcy.zohorecruit.com",
				empty_job_msg: "No current Openings",
				});
			</script>
			</div>
		</div>
		</div>
    `;
  }, []);

  return <div id="zoho-jobs" />;
}

export default ZohoJobs;
