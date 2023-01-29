"use client";

import React from "react";
import { Box, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const JobList = () => {
  const jobs = [
    {
      id: 1,
      title: "The Metaverse",
      url: "https://thedefiant.io/web3-soaring-salaries/",
    },
    {
      id: 2,
      title: "Blockchain Developer Salary - Jun 2022",
      url: "https://content.techgig.com/hiring/top-5-metaverse-jobs-that-will-rule-the-future-of-tech-industry/articleshow/87581325.cms",
    },
    {
      id: 3,
      title: "Web3 Salaries Soar to $750,000 for Rank-and-File Devs",
      url: "https://web3.career/web3-salaries/blockchain-developer",
    },
    {
      id: 4,
      title:
        "Blockchain Gaming, and NFTs: Navigating the Internet's Uncharted Waters",
      url: "https://newzoo.com/insights/trend-reports/newzoo-report-on-metaverse-blockchain-gaming-nft-2022",
    },
    {
      id: 5,
      title: "How To Become Metaverse Developer: Scope, Skills, and Salary",
      url: "https://www.blockchain-council.org/metaverse/how-to-become-metaverse-developer/",
    },
  ];

  return (
    <Box>
      <ol>
        {jobs.map((job, index) => (
          <Box px={8} fontSize={"xl"} fontWeight={"normal"} pt={4} key={index}>
            <li >
              <Link href={job.url} isExternal>
                {job.title}
                <ExternalLinkIcon mx="1rem" ml={2} />
              </Link>
            </li>
          </Box>
        ))}
      </ol>
    </Box>
  );
};

export default JobList;


