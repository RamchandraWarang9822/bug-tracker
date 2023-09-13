import { FC, useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { bugProps } from "../../types/types";
import { db } from '../../config/firebase';

import { Bug, BugForm } from "../"
import { Box } from '@mui/material';

const Feed: FC = () => {


    useEffect(() => {
        getBugList();
    }, []);

    const [bugList, setBugList] = useState<bugProps[]>([]);
    const bugCollectionRef = collection(db, 'bugs');


    const getBugList = async () => {

        try {
            const data = await getDocs(bugCollectionRef);
            const filteredData: bugProps[] = data.docs.map((doc) => {
                const bugData = doc.data();
                return {
                    id: doc.id,
                    description: bugData.description,
                    fixed: bugData.fixed,
                    date: bugData.date,
                    title: bugData.title,
                };
            });
            setBugList(filteredData);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Box sx={{ marginTop:"10px" ,flex:{ lg: 5 , sm:10}}}>
            <BugForm getBugList={getBugList} />
            <Box display={"flex"} gap={"1rem"} pt={"20px"} flexWrap={"wrap"} >
                {bugList.map((bug: bugProps) => (
                    <Bug key={bug.id} id={bug.id} title={bug.title} description={bug.description} fixed={bug.fixed} date={bug.date} />
                ))}
            </Box>
        </Box>
    )
}

export default Feed