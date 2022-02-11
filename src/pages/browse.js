import React, { useContext, useState, useEffect } from 'react';
import { useContent } from '../hooks';
import selectionMap from '../utils/selection-map';
import { SelectProfile, Loading, BrowseHeader, Card, Footer } from "../components/";
import { FirebaseContext } from '../context/firebase'
import { ReleaseBody } from '../components/loading/styles/loading';
import Fuse from 'fuse.js';
const Browse = () => {
    const [slideRows, setSlideRows] = useState([]);
    const [category, setCategory] = useState('series');
    const [searchTerm, setSearchTerm] = useState('');
    const { series } = useContent('series')
    const { films } = useContent('films')
    const slides = selectionMap({ series, films })
    const { auth } = useContext(FirebaseContext);
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);

    const user = auth.currentUser || {}
    useEffect(() => {
        console.log(profile);
        setTimeout(() => { setLoading(false) }, 3000);
    }, [profile.displayName]);
    useEffect(() => {
        console.log(category, slides)
        setSlideRows(slides[category]);

    }, [profile, category]);
    useEffect(() => {
        const fuse = new Fuse(slideRows, {
            keys: ['data.description', 'data.title', 'data.genre']
        })
        //console.log("searchTerm", searchTerm)

        const results = fuse.search(searchTerm).map(({ item }) => item)

        if (slideRows.length > 0
            && searchTerm.length > 3
            && results.length > 0) {
            setSlideRows(results)
        } else {
            setSlideRows(slides[category])
        }
        return () => {

        }
    }, [searchTerm])

    return profile.displayName ?
        loading ?
            <Loading src={user.photoURL} /> :
            <><ReleaseBody />
                <BrowseHeader src='joker1'
                    dontShowOnSmallViewPort
                    user={user} signOut={() => auth.signOut()}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    category={category}
                    setCategory={setCategory}>
                </BrowseHeader>
                <Card category={category} slideRows={slideRows} />
                <Footer />
            </>
        : <SelectProfile user={user} setProfile={setProfile} />

};

export default Browse;
