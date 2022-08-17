import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles =
        [
            {
                "source": {
                    "id": "news24",
                    "name": "News24"
                },
                "author": "Heinz Schenk",
                "title": "Proteas feeding off scraps: ICC's new schedule shows why CSA needs its new T20 league",
                "description": "The ICC's new Future Tours Programme illustrates vividly why CSA desperately need to get their T20 League off the ground.",
                "url": "https://www.news24.com/sport/Cricket/Proteas/proteas-feeding-off-scraps-iccs-new-schedule-shows-why-csa-needs-its-new-t20-league-20220817",
                "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/3475/250e9fa8fd2644ac95986c6fe3f1b7e8.jpg",
                "publishedAt": "2022-08-17T10:53:38+00:00",
                "content": "<ul><li>The ICC's new Future Tours Programme illustrates vividly why CSA desperately need to get their T20 League off the ground.</li><li>The schedule, encompassing the period of 2023 until 2027, see… [+2847 chars]"
            },
            {
                "source": {
                    "id": "goteborgs-posten",
                    "name": "Göteborgs-Posten"
                },
                "author": "Alexandra Turku,Elin Janvik Kardell",
                "title": "Malin kämpade mot lågorna: ”Går runt och gråter tillsammans”",
                "description": "Chock och sammanhållning över storbranden.",
                "url": "http://www.gp.se/nyheter/g%C3%B6teborg/%C3%B6borna-om-dagen-efter-branden-det-k%C3%A4nns-f%C3%B6r-j%C3%A4vligt-1.79050261",
                "urlToImage": "https://www.gp.se/image/policy:1.79050243:1660725630/image.jpg?f=Wide%26w=1200%26%24p%24f%24w=834285a",
                "publishedAt": "2022-08-17T10:40:17Z",
                "content": "Strax före klockan 19 på tisdagskvällen kom ett larm om att det brann i närheten av Coop på Källö-Knippla. Räddningstjänsten kämpade mot branden men lyckades inte hindra den från att sprida sig i byg… [+2096 chars]"
            },
            {
                "source": {
                    "id": "goteborgs-posten",
                    "name": "Göteborgs-Posten"
                },
                "author": "Emma Tonnvik",
                "title": "Öis klubbchef Niklas Allbäck lämnar",
                "description": "Öis klubbchef Niklas Allbäck lämnar sitt uppdrag, det meddelar klubben på onsdagen. Andreas Karlsson går in som tillförordnad klubbchef.",
                "url": "http://www.gp.se/sport/fotboll/%C3%B6is-klubbchef-niklas-allb%C3%A4ck-l%C3%A4mnar-1.79048283",
                "urlToImage": "https://www.gp.se/image/policy:1.72560272:1652352454/image.jpg?f=Wide%26w=1200%26%24p%24f%24w=834285a",
                "publishedAt": "2022-08-17T10:11:25Z",
                "content": "Öis skriver på sin hemsida att klubben genomför förändringar i organisationen och att Allbäck på egen begäran kliver av sin roll. \r\nNiklas Allbäck lämnar sin roll efter fem år på posten.\r\n Slutet på … [+1111 chars]"
            },
            {
                "source": {
                    "id": "goteborgs-posten",
                    "name": "Göteborgs-Posten"
                },
                "author": "Kristian Wedel",
                "title": "”Heter din andra brorsa Muhammed?”",
                "description": "De dunkade honom i ryggen och sa att han var den roligaste lurendrejare som de någonsin träffat.",
                "url": "http://www.gp.se/livsstil/v%C3%A4rldens-g%C3%A5ng/heter-din-andra-brorsa-muhammed-1.78976434",
                "urlToImage": "https://www.gp.se/image/policy:1.78976424:1660643096/image.jpg?f=Wide%26w=1200%26%24p%24f%24w=834285a",
                "publishedAt": "2022-08-17T09:36:28Z",
                "content": "Jag ligger verkligen efter när det gäller det här med namn. När jag var barn hette pojkarna Johan och flickorna Jessica. Nu heter de allt utom det.\r\nMin eftersläpning har pågått länge. När mina barn … [+3982 chars]"
            },
            {
                "source": {
                    "id": "news24",
                    "name": "News24"
                },
                "author": "Herman Mostert",
                "title": "Utility back Smit joins Bulls from Cheetahs",
                "description": "The Bulls have announced the signing of versatile backline player Chris Smit from the Cheetahs.",
                "url": "https://www.news24.com/sport/Rugby/UnitedRugbyChampionship/utility-back-smit-joins-bulls-from-cheetahs-20220817",
                "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/3669/0d73950990eb4627ab03678e02adc950.jpg",
                "publishedAt": "2022-08-17T09:31:40+00:00",
                "content": "The Bulls on Wednesday announced the signing of versatile backline player Chris Smit from the Cheetahs.\r\nThe 27-year-old, who can play centre and flyhalf, spent three years in Bloemfontein. Before th… [+1067 chars]"
            },
            {
                "source": {
                    "id": "the-wall-street-journal",
                    "name": "The Wall Street Journal"
                },
                "author": "Gunjan Banerji",
                "title": "What Investors Need to Know About AMC’s APE Units: A Stock ‘Split on Steroids’",
                "description": "The cinema chain appears to be trying to improve its finances after narrowly averting bankruptcy during the Covid-19 pandemic.",
                "url": "https://www.wsj.com/articles/what-investors-need-to-know-about-amcs-ape-units-a-stock-split-on-steroids-11660728711?mod=hp_lead_pos12",
                "urlToImage": "https://images.wsj.net/im-604397/social",
                "publishedAt": "2022-08-17T09:31:00Z",
                "content": null
            },
            {
                "source": {
                    "id": "the-wall-street-journal",
                    "name": "The Wall Street Journal"
                },
                "author": "Harriet Torry",
                "title": "Retail Spending in July to Reflect Impact of Lower Gas Prices",
                "description": "As the Commerce Department releases its monthly report, economists estimate shoppers increased spending modestly with fuel taking up a smaller share of costs.",
                "url": "https://www.wsj.com/articles/us-economy-retail-sales-july-2022-11660683658?mod=hp_lead_pos1",
                "urlToImage": "https://images.wsj.net/im-605064/social",
                "publishedAt": "2022-08-17T09:30:00Z",
                "content": null
            },
            {
                "source": {
                    "id": "the-wall-street-journal",
                    "name": "The Wall Street Journal"
                },
                "author": "Aziz Sunderji and Amrith Ramkumar",
                "title": "SPAC Activity in July Reached the Lowest Levels in Five Years",
                "description": "Once-hot blank-check firms have fallen out of favor alongside cryptocurrencies and other speculative investments.",
                "url": "https://www.wsj.com/articles/spac-activity-in-july-reached-the-lowest-levels-in-five-years-11660691758?mod=hp_lead_pos4",
                "urlToImage": "https://images.wsj.net/im-605272/social",
                "publishedAt": "2022-08-17T09:30:00Z",
                "content": null
            },
            {
                "source": {
                    "id": "the-wall-street-journal",
                    "name": "The Wall Street Journal"
                },
                "author": "Katherine Sayre",
                "title": "Gambling Operators Including FanDuel, DraftKings Tweak Marketing as NFL Season Arrives",
                "description": "Some companies are cutting back their promotions in states where they already have a foothold as profitability targets loom next year.",
                "url": "https://www.wsj.com/articles/gambling-operators-including-fanduel-draftkings-tweak-marketing-as-nfl-season-arrives-11660728602?mod=hp_lead_pos11",
                "urlToImage": "https://images.wsj.net/im-603270/social",
                "publishedAt": "2022-08-17T09:30:00Z",
                "content": null
            }
        ];
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1
        };
    }

    async componentDidMount() {
        let url = 'https://newsapi.org/v2/top-headlines?q=war&page=1&pageSize=20&apiKey=3fdb4db4dcaa4cb19d2fe2121b529f65';
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            articles: parseData.articles,
            totalArticles: parseData.totalResults
        })

    }

    handlePrevBtn = async () => {
        let url = `https://newsapi.org/v2/top-headlines?q=war&page=${this.state.page - 1}&pageSize=20&apiKey=3fdb4db4dcaa4cb19d2fe2121b529f65`;
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parseData.articles
        })
        console.log('prev');
    }
    handleNextBtn = async () => {
        let url = `https://newsapi.org/v2/top-headlines?q=war&page=${this.state.page + 1}&pageSize=20&apiKey=3fdb4db4dcaa4cb19d2fe2121b529f65`;
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            page: this.state.page + 1,
            articles: parseData.articles
        })
        console.log(Math.ceil(this.state.totalArticles / 20));
    }

    render() {
        return (
            <div className='container my-4'>
                <h2>News -- Top Headlines</h2>
                <hr className='my-4' />
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title} description={element.description} url={element.url} urlToImage={element.urlToImage} />
                        </div>
                    })}

                </div>
                <div className="container d-flex justify-content-center">
                    <button disabled={this.state.page <= 1} type="button" onClick={this.handlePrevBtn} className="btn btn-info mx-2 my-2 ">prev</button>
                    <h5 style={{ margin: '12px 6px' }}>{this.state.page}</h5>
                    <button disabled={Math.ceil(this.state.totalArticles / 20) < this.state.page + 1} type="button" className="btn btn-info mx-2 my-2" onClick={this.handleNextBtn}>Next</button>
                </div>
            </div>
        )
    }
}

export default News 