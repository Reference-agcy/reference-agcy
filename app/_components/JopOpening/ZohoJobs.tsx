"use client";

import { useEffect } from "react";

// styled zoho job openings embedded code
const ZOHO_EMBEDDED_CODE = `
		<link
		rel="stylesheet"
		href="https://static.zohocdn.com/recruit/embed_careers_site/css/v1.1/embed_jobs.css"
		type="text/css"
		/>
		<div class="embed_jobs_head embed_jobs_with_style_3 embed_jobs_with_style min-h-[55dvh] !bg-transparent !shadow-none">
			<div class="embed_jobs_head2 min-h-[55dvh] rounded-2xl !border-none shadow">
				<div class="embed_jobs_head3">
					<div id="rec_job_listing_div" class="[&>div>div]:!rounded-[8px] [&_a]:!text-primary-600"></div>
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

function ZohoJobs() {
  useEffect(() => {
    // Check if this is the first load
    const hasReloaded = localStorage.getItem("zohoJobsReloaded");

    if (!hasReloaded) {
      // Set the flag before reloading
      localStorage.setItem("zohoJobsReloaded", "true");
      // Reload once
      window.location.reload();
    } else {
      // Clear the flag after some time to allow future reloads if needed
      // e.g., when user navigates away and comes back
      setTimeout(() => {
        localStorage.removeItem("zohoJobsReloaded");
      }, 5000);
    }
  }, []);

  return (
    <div
      id="zoho-jobs"
      dangerouslySetInnerHTML={{
        __html: ZOHO_EMBEDDED_CODE,
      }}
      className="[&_.rec-job-info]:!rounded-[8px] [&_input.rec-job-info]:!rounded-full [&_input.rec-job-info]:outline-none"
    />
  );
}

export default ZohoJobs;
