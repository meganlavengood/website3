---
layout: post
title: "Analysis: Music Theory Jobs 2025–26"
date: 2026-10-21 12:00:00 -0400
toc: true
banner: "/assets/posts/chalkboard-graph.png"
banner-alt: "two chalk lines forming a rough graph on a chalkboard"
lead: "Visualizations of data from the Music Studies Jobs Wiki that show which schools offered music theory jobs, and who won them."
---

As the newest academic job season enters its most intense phase, I realized it had been many years since I last really analyzed the job market. I made a [post back in 2017](https://wordpress.meganlavengood.com/2017/05/02/the-tenure-track-job-search-in-music-theory/) documenting the results of my own job search in the 2016–2017 cycle, and well, a lot has changed since then.

Probably the most disturbing trend is the precipitous drop in TT job postings. In 2016, I applied to 25 tenure-track jobs. But last year, **only 10 tenure-track jobs were posted**, and 2 of those searches ended without any hire.

Below are some visualizations I thought would interest anyone concerned with the theory job market. Note that this data only includes jobs listed under "Theory Only" in the [Music Studies Jobs wiki](https://academicjobs.fandom.com/wiki/Music_Studies_2025-2026) with institutions in the US or Canada.

<hr>

{% include theory-jobs-viz.html csv="/theory-jobs/data-25-26.csv" %}

<hr>

## Process

In 2016, I was using data I had compiled myself by hand as I tracked my own job applications, a process I've never been keen to repeat out of simple curiosity.

AI tools made this a lot easier this time around. Here's the process I went through over the past couple days:

1. Paste the "Theory Only" section of the [Music Studies Jobs wiki](https://academicjobs.fandom.com/wiki/Music_Studies_2025-2026) into a .txt file
2. Ask Claude (AI) to extract the following data from the wiki and reformat it into a .csv file: Job Institution, job location, position title, position type (tenure-track or non-), Hire Status, Hiree, Hiree's degree-granting institution, hiree's degree type (PhD/DMA/etc.) and specialization (theory/comp/etc.), hiree's degree year.
3. Ask Claude to use the ChartJS library to build charts showing:
   1. The proportion of jobs that were tenure-track and non-tenure-track
   2. The outcomes of the searches (filled, failed, unknown)
   3. What degree was held by the hiree, broken down by job type (TT/NTT)
   4. Whether the degree was completed or the hiree was ABD, broken down by job type (TT/NTT)
   5. The degree-granting institutions, broken down by job type (TT/NTT)

Hopefully, if I want to post this year's data in the future, I can just do step 2 again and plug in a new .csv file to get next year's data visualization.
