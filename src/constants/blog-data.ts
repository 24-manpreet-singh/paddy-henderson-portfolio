import AUTHOR_IMAGE from "@/assets/images/blog/author-image.jpg";
import BLOG_1_IMAGE from "@/assets/images/blog/blog-1.jpeg";
import BLOG_10_IMAGE from "@/assets/images/blog/blog-10.webp";
import BLOG_11_IMAGE from "@/assets/images/blog/blog-11.webp";
import BLOG_12_IMAGE from "@/assets/images/blog/blog-12.webp";
import BLOG_13_IMAGE from "@/assets/images/blog/blog-13.webp";
import BLOG_14_IMAGE from "@/assets/images/blog/blog-14.webp";
import BLOG_2_IMAGE from "@/assets/images/blog/blog-2.webp";
import BLOG_3_IMAGE from "@/assets/images/blog/blog-3.png";
import BLOG_4_IMAGE from "@/assets/images/blog/blog-4.jpeg";
import BLOG_6_IMAGE from "@/assets/images/blog/blog-5.jpeg";
import BLOG_5_IMAGE from "@/assets/images/blog/blog-6.webp";
import BLOG_7_IMAGE from "@/assets/images/blog/blog-7.webp";
import BLOG_8_IMAGE from "@/assets/images/blog/blog-8.jpg";
import BLOG_9_IMAGE from "@/assets/images/blog/blog-9.jpg";
import { StaticImageData } from "next/image";

export enum ServiceCategories {
  ALL = "All",
  SPORTS = "Sports",
  BOOKS = "Books",
  TV_AND_FILM = "Tv and File",
  ACADEMIC = "Academic",
}

export interface BLOG_DATA_PROPS {
  id: number; // Unique identifier for the post
  type: ServiceCategories; // Type of service category
  authorImageSrc: StaticImageData; // Source URL for the author's image
  authorImageAlt: string; // Alt text for the author's image
  imageSrc: StaticImageData; // Source URL for the main image of the post
  imageAlt: string; // Alt text for the main image of the post
  title: string; // Title of the blog post
  shortDescription: string; // Short description of the blog post
  description: string; // Detailed description of the blog post
  date: string; // Date of publication
  writer: string; // Author's name
}

export const BLOG_DATA: BLOG_DATA_PROPS[] = [
  {
    id: 1,
    type: ServiceCategories.ACADEMIC || ServiceCategories.ALL,
    authorImageSrc: AUTHOR_IMAGE,
    authorImageAlt: "paddy henderson",
    imageSrc: BLOG_1_IMAGE,
    imageAlt: "service-1",
    title: "Jay-Jay Okocha: So Good They Named Him Twice",
    shortDescription: "Showfar is an application which allows",
    description: `
    It’s January 2004, and Bolton Wanderers are playing Aston Villa in the first leg of the Carling Cup semi-final. In the 80th minute, Bolton are awarded a free-kick about 20 yards from Villa’s goal, just outside the top right corner of the box. Aston Villa, down 4-2 in the game, set a two-man wall while Bolton deploy three runners to the left of the penalty spot, with five Villa defenders forming a line even with the wall. The whistle blows, and up steps Bolton’s Nigerian catalyst, Jay-Jay Okocha. Everyone freezes.

    Moments like this, frozen on film, are footballing magic. Okocha’s approach to the dead ball is direct—he doesn’t waste a second. Anyone who’s played football knows that feeling, though in a different sense. The ball, trickling towards an already running player, sits just right for someone to swing their boot through, sending it knuckling through the air—either to the back of the net or, more likely for us mere mortals, into the upper stratosphere. The anticipation builds: the shot is coming.
    
    The sheer pace of Okocha’s run indicates there will be no cross. A right-footed strike, in the conventional universe, would bend around the left shoulder of the leftmost man in the wall. But Jay-Jay Okocha doesn’t belong to the conventional universe. He exists in a footballing multiverse where he controls space, time, matter, and energy. He is the master of the physical laws that make up this strange place. Here, Okocha bends the ball with the outside of his right boot with such pace, power, and accuracy that the venomous shot unleashed near-post is pure alchemy.

    Displays like this spoiled the footballing world during Okocha’s career, which took him from the streets of Enugu, Nigeria, to Europe in 1990 with Borussia Neunkirchen, Eintracht Frankfurt, Fenerbahçe, Paris Saint-Germain—where he was rumoured to have been a pivotal figure for a young Ronaldinho—Bolton Wanderers, and Hull City. Internationally, Okocha featured for the Super Eagles in the 1994 World Cup in the United States, and later that year, he was part of the squad that won the African Cup of Nations. Two years later, Nigeria claimed the gold medal at the 1996 Olympic Games. In 1998, Okocha was a bright spot in an otherwise disappointing World Cup in France, where Nigeria lost their second-round match to Spain. Okocha’s displays for Nigeria, especially in subsequent African Cup of Nations tournaments, helped showcase the great football played by African stars (though he never won African Player of the Year).
    
    But it was his time with a club from a factory town in north-west England that solidified his legend. When Bolton Wanderers signed Okocha in 2002, the terrace chant, “Jay-Jay Okocha, the man was so good they named him twice,” made perfect sense. At Bolton, Okocha juxtaposed the rigidity of an often frenetic Premier League with his rubbery-legged audacity, pulling off tricks typically reserved for the schoolyard or park—yet executed with the finesse and flair of a professional. His swagger on the ball was as refreshing as it was inspirational, especially for fans watching at home, young and old.

    For a youthful generation, trying to replicate the same flicks, tricks, and feints under dim streetlights late into the night, Okocha was proof that self-expression is just as much a skill as a Cruyff turn or a rabona. For the older generation, mired in the pragmatism of Sunday league football, Okocha represented everything unorthodox about the game.

    Some players are remembered for how many goals they scored, but Okocha’s Premier League performances were far more than just about the goals—which were, of course, world-class. The Nigerian magician captained a Bolton side that boasted players like Youri Djorkaeff, Ricardo Gardner, Gary Speed, Iván Campo, Fernando Hierro, Nicolas Anelka, and Jussi Jääskeläinen. It’s Okocha’s frequent displays of freestyle skills that epitomized that period of Bolton Wanderers’ football for the neutral fan.

    Players like Okocha are rare at the top level. While there’s no shortage of footballing tricksters globally, Okocha could also play the simple game, his ability to maraud box-to-box, tackle, ride challenges, pass over distance, slalom through midfields, and score exquisite goals, unmatched. His fluidity on the ball and his unteachable ability to weave through pressure seemed to defy the very laws of the game. Every time he touched the ball, it felt as though something magical was about to happen.

    Okocha’s exquisite level of unorthodox technique has yet to be replicated in the Premier League. While we occasionally see glimpses of it—like Philippe Coutinho’s shoulder dip or Alexis Sánchez’s immaculate first touch—Okocha’s magic was a constant on the pitch.

    Few players can bring the creativity of street football to the highest level and still thrive. Today, football is consumed through social media snippets and highlight reels, but in Okocha’s era, this kind of raw skill was on display every time he took the pitch.

    Football has changed, but Okocha’s style is timeless. His ability to bring flair, freedom, and technical brilliance to the game made him one of the most unique and beloved figures in Premier League history.

    Okocha didn’t just play football—he redefined it. With his hypnotic dribbles, outrageous flicks, and audacious skills, he became a symbol of footballing artistry. He didn’t dive or make headlines for the wrong reasons—he simply had ‘it’: the swagger, the confidence, the freedom to express himself on the pitch.

    Simply put, Okocha’s contributions to football deserve celebration. He captained a Bolton side that qualified for the UEFA Cup and helped the club reach a League Cup final, upsetting expectations along the way. His influence kept Bolton in the Premier League, all while playing breathtaking football.

    Jay-Jay Okocha belongs to the fraternity of African football legends, alongside George Weah, Samuel Eto’o, Didier Drogba, Abedi Pele, and Nwankwo Kanu. Yet, for many, Okocha is the most technically gifted African player ever to grace the pitch.
  `,
    date: "Dec 9, 2020",
    writer: "Paddy Henderson",
  },

  {
    id: 2,
    type: ServiceCategories.BOOKS || ServiceCategories.ALL,
    authorImageSrc: AUTHOR_IMAGE,
    authorImageAlt: "paddy henderson",
    imageSrc: BLOG_2_IMAGE,
    imageAlt: "service-2",
    title: "The Alchemist - Book Review",
    shortDescription: "Showfar is an application which allows",
    description: `"When you really want something, the universe always conspires in your favour."


    This is one of the key repeated phrases found in The Alchemist, and as overly inspirational as it may sound, there might be some truth to it. After all, I really wanted to read something beyond exceptional after trudging through too much un-original dystopian fiction – and the universe gave me The Alchemist!
    
    
    Quips aside though, Coehlo’s short 163–page book is a singularly inspirational masterpiece. The plotline is that of a simple quest – a Spanish shepherd boy, Santiago, keeps getting the same dream that there is treasure lying underneath the Egyptian pyramids. After meeting an old king who offers him some advice and some magic stones, Santiago embarks on his journey to cross the Mediterranean and the Sahara to find his treasure and accomplish his Personal Legend (a concept equivalent to our purpose in life). Amidst swindlers, tribe wars and endless sand, Santiago finds his one true love, learns alchemy and the language of his heart, and of course, fights to reach his treasure.
    
    
    But reading this book simply for the plot would be akin to viewing Starry Night as globs of paint – losing at least 70% of the beauty Coehlo truly presents. With a dreamy and pensive writing style, the author weaves into the storyline multiple sage concepts which a philosopher could ponder for years on. Insightful ideas about one’s own destiny, about rising above failure, about the unity of the universe, are all things Coehlo pens into the comparatively simplistic diction of the text. The descriptions are awe-inspiring and the word choice is immaculate, but really it’s the depth of soul behind Coehlo’s words that spin the magic of this novel.
    
    
    For anyone who reads not only to escape reality but also to understand reality, The Alchemist can offer the best of both worlds. The events of the novel sit just on the borderline of miraculous and the ambience is simply just not that of our humdrum teenage world. However, The Alchemist also supplies insight and inspiration that extends beyond Santiago’s Sahara and into all lives, whether young, old, or teenage. The Alchemist may not be your regular fiction book, but it most definitely still deserves a place on your bookshelf!
    
    `,
    date: "May 6, 2020",
    writer: "Paddy Henderson",
  },
  {
    id: 3,
    type: ServiceCategories.SPORTS || ServiceCategories.ALL,
    authorImageSrc: AUTHOR_IMAGE,
    authorImageAlt: "paddy henderson",
    imageSrc: BLOG_3_IMAGE,
    imageAlt: "service-3",
    title:
      "Sapiens: A Brief History of Humankind by Yuval Noah Harari – review",
    shortDescription: "Showfar is an application which allows",
    description: `In "Sapiens: A Brief History of Humankind," author Yuval Noah Harari embarks on a grandiose and audacious journey, traversing the expanse of human evolution from the nascent stirrings of Homo sapiens to the speculative horizons of post-humanism and bioengineered entities. With a narrative that spans merely 400 pages, Harari ambitiously endeavors to distill the essence of our species’ multifaceted history, a task that, while inherently challenging, is approached with a remarkable blend of erudition and verve.

    Harari's discourse navigates through the pivotal revolutions that have defined the human saga: from the cognitive revolution, which ignited our ancestors' remarkable dispersal across the globe and the dawn of ingenuity, to the agricultural revolution, marking the shift from nomadic lifestyles to settled agrarian societies. This journey progresses through the enlightenment of the scientific revolution, paving the way for the industrial and information revolutions, and ventures into the nascent biotechnological revolution, which Harari suggests might culminate in the transcendence of Homo sapiens, giving rise to a new era of genetically modified, possibly immortal beings.
    
    Woven into the fabric of this narrative are provocative contentions, such as the notion that it was not humanity that domesticated wheat, but rather wheat that ensnared humans into a sedentary existence, thereby forging a double-edged sword of progress and plight. Harari critically appraises the agricultural revolution as "history's biggest fraud," positing that despite its monumental role in advancing civilization, it engendered a decline in diet quality, exacerbated labor conditions, and fostered societal inequities.
    
    At the heart of Harari's exploration lies the development of language, a pivotal evolutionary milestone that facilitated unprecedented levels of cooperation, gave rise to diverse religious ideologies, and laid the foundations for economic systems that have since dominated human societies. Yet, amidst these transformative developments, Harari suggests a paradox; the underlying tapestry of human emotion and desire remains largely untouched by the tides of change, still echoing the ancestral echoes of our hunter-gatherer forebears.
    
    Delving into speculative territory, "Sapiens" intriguingly explores the quest for "amortality" - a bid to vanquish natural death - casting a skeptical gaze on its implications for human contentment and societal harmony.
    
    While "Sapiens" invites occasional critique for its bold generalizations and the audacity of its assertions, the book stands as an intellectually invigorating odyssey that compels readers to reconsider the arc of human history, the intricacies of our present, and the ethical quandaries of our future endeavors. Harari’s work is a testament to the power of storytelling in unraveling the complexities of our past, interrogating the realities of our present, and imagining the possibilities of our future, making it an eloquent and stirring contribution to the discourse on humanity’s past, present, and potential futures.`,
    date: "Apr 15, 2020",
    writer: "Paddy Henderson",
  },
  {
    id: 4,
    type: ServiceCategories.SPORTS || ServiceCategories.ALL,
    authorImageSrc: AUTHOR_IMAGE,
    authorImageAlt: "paddy henderson",
    imageSrc: BLOG_4_IMAGE,
    imageAlt: "service-4",
    title:
      "Theresa May Resigns: UK to Welcome New Prime Minister by End of July",
    shortDescription: "Showfar is an application which allows",
    description: `In a move that has sent shockwaves through British politics, Theresa May announced her resignation as leader of the Conservative Party on 7 June, setting the stage for a leadership contest that will ultimately decide her successor and the next Prime Minister of the United Kingdom. The announcement came after a tumultuous tenure dominated by Brexit negotiations, culminating in an emotional statement outside Downing Street, where May expressed profound regret over her inability to deliver Brexit.

    May's tenure has been marred by challenges and controversies, primarily revolving around her handling of the UK's departure from the European Union. Despite her relentless efforts, the withdrawal deal she negotiated with the EU failed to gain the necessary support in Parliament, leading to a deadlock that has paralyzed British politics.
    
    The leadership race is expected to be fiercely competitive, with several high-profile Conservatives, including Foreign Secretary Jeremy Hunt, Boris Johnson, Esther McVey, and Rory Stewart, already throwing their hats into the ring. The contest is not only about choosing a new leader but also about defining the future direction of the Conservative Party and, by extension, the country's Brexit strategy.
    
    Theresa May's departure is set against the backdrop of a scheduled state visit by US President Donald Trump, who expressed his sympathy for May, lauding her as a "good woman" who worked very hard. The leadership transition is hoped to be concluded by the end of July, ensuring a new Prime Minister is at the helm to navigate the complex political and economic challenges that lie ahead.
    
    As the Conservative Party gears up for the leadership battle, the UK remains deeply divided over Brexit, with no clear path forward. The new Prime Minister will inherit a country at a crossroads, facing the daunting task of uniting a fractured Parliament and populace.
    
    May's resignation marks the end of an era and the beginning of a new chapter in British politics. Her emotional departure speech highlighted her dedication to public service and her love for the country. As the second female Prime Minister in UK history, May expressed hope that she would not be the last, underscoring the importance of continued female leadership in politics.
    
    The leadership vacuum comes at a critical time for the UK, as it grapples with the implications of Brexit and its future relationship with the European Union. The next Prime Minister will have to navigate these turbulent waters, striving to achieve consensus across the political spectrum and charting a course that safeguards the nation's interests.
    
    As the Conservative Party prepares for this pivotal transition, the country watches with bated breath, awaiting the emergence of a leader capable of steering the UK through one of the most challenging periods in its recent history.
    
    `,
    date: "May 14, 2019",
    writer: "Paddy Henderson",
  },
  {
    id: 5,
    type: ServiceCategories.TV_AND_FILM || ServiceCategories.ALL,
    authorImageSrc: AUTHOR_IMAGE,
    authorImageAlt: "paddy henderson",
    imageSrc: BLOG_5_IMAGE,
    imageAlt: "service-5",
    title: "John Motson: The Voice of Football",
    shortDescription: "Showfar is an application which allows",
    description: `You would have to be born before 1968 to have been alive when the great John Motson wasn’t on the radio or TV. He’s been on Match of the Day since 1971! He’s pretty much only covered football, so he’s not just part of the furniture, he’s part of the warp and weft of BBC football coverage and is, in some ways, part of its DNA and thus in all of our football media DNA.


    Motson all but invented the art of TV commentary. His preparation of various facts and figures predated the now commonplace reliance on in-game statistics. So many great moments of high drama in football have come complete with a Motty “Oh I say!” or a “Danger here!” or merely that unique Motson noise which comes out of him at several different frequencies simultaneously and can be best characterised as wheezy bellowing.
    
    
    He’s commentated on around 2,000 games and has been present at 40 years’ worth of tournaments, a witness to so much football history and legend. When Tardelli scored THAT goal, who was on the mic? Of course…
    
    
    Long-serving performers fall in and out of fashion but eventually get beyond that and become legendary and that’s very much the trajectory Motty has followed. Indeed, he’s the only commentator to be known by his nickname. Motty, is a brand, as much as a person, these days. Although he hasn’t done live football for some time, his is a comfortable, reassuring presence and he seems to have retained his passion for the game, even now at 71-years-old.
    
    
    He’s been present at some of the great moments in football, perhaps none more so than David Beckham’s last gasp free-kick against Greece. It’s worth considering that when this goal went in, he and Trevor Brooking were leaping around amidst total mayhem.
    
    
    A fan of the “that’s the third time this season a player with a ‘Z’ in his name has been sent off for a club located within 20 miles of the M62, whose wife is called Gladys,” school of statistics.
    
    
    He was a bit of a pioneer in having those sort of numbers to hand. Interestingly, these days, I’ve heard him be somewhat sceptical at the expansion of stats into an art form, rightly wondering who is checking the veracity of the stat collectors.
    
    
    You can’t fake enthusiasm for long in broadcasting and Motty does still seem to retain a genuine enthusiasm for the game of Association Football. There is a boyish charm to what he does, his voice still prone to going into a high squeak or breaking into laughter at moments of high dudgeon.
    
    
    If he’s on 5 live’s Monday Night Club it’s always a pleasure to hear him launch off at a tangent, mid-sentence, make an aside to an aside, as ideas drop into the forefront of his consciousness. It goes something like this:
    
    
    “Incidentally…you can say what you like about Wenger…and people will, I know we’ll be …but really, when you go back all the way to Bertie Mee, who incidentally wasn’t the first to…y’know…you’ve got to consider these things, but in these days of mobiles and everything is mobile these days, I’m not a computer, Mark. It’s hard to keep up and before you know it, and it wasn’t always like this, it’s all got out of hand.”
    
    
    When in tandem with Mark Lawrenson, his puppyish enthusiasm is balanced out by the Lawro cynicism in a perfect double-act. When working on the radio, especially on the MNC, he often develops an excitable tone, the way some of us do after a couple of drinks, and this makes for very good listening.
    
    
    Has that rather endearing habit that all older people develop of thinking things that were a long time ago now, are in fact quite recent. “These days, Mark, with three points for a win, my goodness, things can change very quickly, y’know.”
    
    
    It’s a little-known fact that there is a sheep farm on the fells of Cumbria dedicated to growing animals that will eventually be made into Motty’s coats. It was this moment which really made the coat iconic. It’s odd that you can use a coat to brand yourself but John has done exactly that.
    
    
    Held in a unique, universally lofty esteem, Motty has many fans for whom his voice has all but defined their upbringing and it is hard not to feel great affection towards him for that reason.
    
    
    Oh I say Motty, you’ll most certainly be missed!`,
    date: "November 2022",
    writer: "Paddy Henderson",
  },

  {
    id: 6,
    type: ServiceCategories.TV_AND_FILM || ServiceCategories.ALL,
    authorImageSrc: AUTHOR_IMAGE,
    authorImageAlt: "paddy henderson",
    imageSrc: BLOG_6_IMAGE,
    imageAlt: "service-5",
    title: "Equine flu: British horse racing meetings cancelled",
    shortDescription: "Showfar is an application which allows",
    description: `A recent outbreak of equine flu has caused a significant disruption in British horse racing, leading to the cancellation of races and raising concerns about the impact on the forthcoming Cheltenham Festival. The British Horseracing Authority (BHA) took decisive action by calling off Thursday's races after discovering that three vaccinated horses had contracted the virus. These horses were traced back to the stables of Donald McCain in Cheshire, highlighting the severity of the outbreak.


    The situation has heightened concerns as the affected horses had participated in races the previous day, posing a risk of widespread exposure. In a preventative measure, British-trained horses have been temporarily excluded from competing in Ireland.
    
    
    The looming Cheltenham Festival, a key event in the jump racing calendar, is set to begin in just over a month, on March 12. The current equine flu outbreak recalls the foot-and-mouth disease crisis from nearly two decades ago, which similarly began around this time of year and ultimately led to the festival's cancellation.
    
    
    Following the outbreak, several race meetings, including those at Huntingdon, Doncaster, Chelmsford, and Ffos Las, were abruptly cancelled. The racing community is anxiously awaiting updates on the status of upcoming fixtures at Newcastle and Southwell, with a decision expected soon. Wolverhampton Racecourse also announced the cancellation of its Saturday race meeting after it was discovered that an infected horse had competed there, necessitating extensive cleaning measures.
    
    
    Donald McCain, the trainer of the infected horses, has been proactive in dealing with the crisis, working closely with the BHA and emphasizing the health and welfare of the horses as a top priority. He highlighted the stringent health monitoring and disease control measures in place at his stables, including regular health checks and vaccinations for all horses.
    
    
    The equine flu outbreak poses not only a health risk to horses but also significant financial implications for the entire horse racing industry, affecting everyone involved, from stable staff to owners, trainers, and bettors.
    
    
    Equine influenza is a highly contagious disease that affects horses, donkeys, and mules worldwide, with symptoms that include fever, coughing, and nasal discharge. Its ability to spread through the air over distances and indirectly through human contact makes controlling the outbreak challenging. The recent cases have prompted a reinforced call for vigilance and preventive measures across the industry.
    
    
    As the horse racing community grapples with this outbreak, the focus remains on containing the spread of the disease and mitigating its impact, particularly with the Cheltenham Festival and other major racing events on the horizon. The situation underscores the ongoing challenges and uncertainties within the horse racing industry, highlighting the need for rigorous health and safety protocols.`,
    date: "Mar 4, 2018",
    writer: "Paddy Henderson",
  },

  {
    id: 7,
    type: ServiceCategories.TV_AND_FILM || ServiceCategories.ALL,
    authorImageSrc: AUTHOR_IMAGE,
    authorImageAlt: "paddy henderson",
    imageSrc: BLOG_7_IMAGE,
    imageAlt: "service-5",
    title: "Roger Bannister: The Four Minute Mile",
    shortDescription: "Showfar is an application which allows",
    description: `On a gusty spring afternoon in Oxford in 1954, Roger Bannister, who has sadly died aged 88, became an athlete of world distinction, establishing himself as the most celebrated British sportsman of the period following World War 2. He never won an Olympic title, he set only one individual world record (which he relinquished after barely six weeks) and he retired from running at the height of his powers when he was only 25. But on 6 May 1954, on the Iffley Road cinder track that he had helped to lay as an undergraduate a few years earlier, he ran a mile in under four minutes, a target that had begun to assume almost superhuman proportions in the eyes of the public, the media and many athletes, too.


    Runners in Europe, the US and Australia had whittled down their mile times as the world record assumed an ever-increasing importance. In the US, Wes Santee clocked 4min 2.4sec, and some weeks later failed in a widely publicised attempt at a four-minute mile. In Australia, John Landy ran four separate races in and around 4min 2sec. Bannister himself, with the help of Christopher Chataway, broke the British record in Oxford with 4min 3.6sec.
    
    
    But nobody came really close to the four-minute mark; indeed, no one seriously threatened the world record of 4min 1.4sec set in 1945 by the Swede Gunder Hägg. Early in 1954 Landy announced that he would spend the early part of the summer training – and racing – in Finland. Expectations of a four-minute mile were now at boiling point, and Bannister knew he had to strike fast. With two friends providing the most elite pace making squad that could be imagined – Chataway, who later that summer took the 5000m world record, and Chris Brasher, who won an Olympic gold medal in the steeplechase two years later – Bannister devised an even-paced three-and-a-quarter-lap schedule that would leave him to capitalise on his speed and strength in the final 350 or so yards.
    
    
    On that momentous evening, with the stiff breeze moderating and the showers stopping barely an hour before the race, the plan worked. Brasher led for a metronomic two laps, Chataway for the next one, and a bit more. Bannister, always on the leader’s shoulder, needed to run the final quarter-mile in 59 seconds. He collapsed at the finish, and revived to hear another friend, the statistician Norris McWhirter, announce over the public address: “a track record, English Native record, British National, British All-Comers, European, British Empire and World record; the time: three …” (the rest drowned out by cheering) “… minutes, 59.4 seconds.”
    
    
    Hägg’s record had stood for almost nine years. Bannister’s lasted just 46 days before Landy, running from the front at a meeting in Turku, Finland, posted an astounding 3min 58sec, to set up the “Mile of the Century” at the British Empire Games (as they were still called) in Vancouver early in August. The two milers arrived in Canada to a media frenzy, and there was a real danger that the race itself would prove a dismal anti-climax. But their widely differing strategies ensured that the final, far from descending into a cat-and-mouse tactical duel, would produce one of the great confrontations in the sport’s history. Landy needed to run the finish out of Bannister; Bannister needed to run even-paced laps and conserve enough energy for the sustained power of his sprint.
    
    
    Landy led from the gun, increased his lead as the first two laps progressed to seven yards, 10 yards, 15 yards at one point. Then gradually, halfway through the third lap, Landy began to slow and Bannister’s even stride pulled the gap tighter and tighter. By the bell he was back to Landy’s shoulder, but tired. At the end of the final bend he flung himself past Landy’s right shoulder just, as chance would have it, Landy glanced anxiously over his left. He was away, the Australian could not respond, and the Mile of the Century was Bannister’s. Both men, applauded to the skies by the packed stadium, had run under four minutes.
    
    
    Bannister trained on for one final triumph at the end of August, a prestigious, hard-fought but ultimately comfortable victory in the European 1500 metres in Berne, Switzerland, in a championship record – a commanding exhibition from a thoroughly confident athlete in a week when he was the only British man to win a gold medal. And that was it. He never competed again.
    
    
    Rest well Sir Roger Bannister.`,
    date: "November 2022",
    writer: "Paddy Henderson",
  },

  {
    id: 8,
    type: ServiceCategories.TV_AND_FILM || ServiceCategories.ALL,
    authorImageSrc: AUTHOR_IMAGE,
    authorImageAlt: "paddy henderson",
    imageSrc: BLOG_8_IMAGE,
    imageAlt: "service-5",
    title: "HISTORY & ETHICS OF SPORT",
    shortDescription: "Showfar is an application which allows",
    description: `“The use of so-called performance-enhancing drugs should not be forbidden. Using drugs is no different to employing a dietician or using a scientifically-designed kit in order to try and get the edge over the opposition.” Discuss.



    Name: Adam (Paddy) Henderson
    
    Course: BA Sports Journalism
    
    Institution: University of Gloucestershire
    
    Date: 10/05/2017
    
    
    
    Introduction
    
    The domain of ethics centers on the study of moral values and standards, shaping the principles that determine human conduct (Collins, 2017). As in every professional field, the sports arena too reverberates with the echoes of ethical dilemmas. Athletes must navigate their careers with an understanding that their actions carry consequences for both themselves and the larger sporting community (Rosa, 2015). A pivotal ethical quandary in sports today revolves around the use of performance-enhancing drugs (PEDs). This essay delves deep into the ethical implications surrounding PEDs, juxtaposing them against the consultations with dieticians and the usage of scientifically designed sports equipment.
    
    
    Steroids and Drug Use
    
    PEDs empower athletes to transcend their natural limits, often stirring debates on fairness and ethics in competitive settings. When an athlete resorts to such drugs, they tread the line between strategic advantage and the universally despised act of cheating. It is vital for sports to be perceived as a level playing field where every athlete stands an equal chance based solely on talent and effort (Mill, 2015).
    
    
    However, the demarcation between doping and medical necessity can often blur. For instance, while surgical procedures might necessitate certain drugs that are otherwise banned in sports, does their usage then classify as doping or a medical requirement (BBC, 2014)? Here, the ethical responsibility shifts to the athlete, making choices that align either with the sporting spirit or with personal gains.
    
    
    There exists a prevalent belief that the unethical element isn't the drugs themselves, but rather the inequitable access to these drugs (Mill, 2015). For instance, the permissibility of a footballer using an inhaler contrasts starkly with a sprinter being barred from using TGH, a muscle-enhancing steroid (BBC, 2014). Such inconsistencies highlight the complexity of doping regulations.
    
    
    In light of these ambiguities, some scholars advocate for a liberal approach, suggesting that doping should be permitted to ensure a more even playing field (Kirkup, 2015). They argue that a controlled, public, and regulated use of PEDs could potentially reduce the health risks associated with them.
    
    
    Dietary Supplements and Modern Athletes
    
    The burgeoning world of dietary supplements mirrors the PEDs universe in several ways. The exponential rise in supplement manufacturing has muddled the waters, with athletes often unsure about the contents they're consuming (Rodriguez, DiMarco & Langley, 2010). While the primary objection to PEDs lies in their potential health risks, certain dietary supplements have shown to be equally hazardous.
    
    
    Unscrupulous manufacturers often mislead consumers, packaging banned substances under the guise of 'safe' dietary supplements. Thus, if the potential harm to an athlete's body is a consistent metric, there's little to differentiate between PEDs and some dietary supplements.
    
    
    Ergogenic Aids: Science Meets Sport
    
    Ergogenic aids, defined as techniques or tools that enhance performance, represent another facet of this debate (Kreider et al., 2010). These aids, including scientifically designed kits, aim to bolster an athlete's efficiency, resilience, and recovery. Notably, their core function—to empower athletes to exceed their natural abilities—aligns with the purpose of PEDs. Thus, if one were to strictly judge by functionality, the line separating ergogenic aids from PEDs seems exceedingly thin.
    
    
    However, it's essential to remember that not all ergogenic aids carry potential health risks. Therefore, while their performance-enhancing benefits might be comparable to PEDs, their health implications might differ significantly.
    
    
    Conclusion
    
    Ethics remains the backbone of every professional sphere, guiding actions and decisions. The sports industry, with its myriad of challenges, is no exception. As athletes grapple with the temptations of PEDs, dietary supplements, and ergogenic aids, the onus is on regulatory bodies to provide clear guidelines and ensure fairness.
    
    
    The very essence of sports—a celebration of human potential and spirit—gets diluted if artificial enhancements overshadow natural prowess. While there are arguments in favor of allowing PEDs, doing so could rob sports of its quintessential charm. In this complex landscape, it's crucial to remember that while PEDs, dietary supplements, and ergogenic aids might offer short-term advantages, the long-term implications—for health, fairness, and the very spirit of sports—require thoughtful consideration.
    
    
    References
    
    BBC. 2014. ‘Performance enhancing behavior.’ BBC. [Online] available from http://www.bbc.co.uk/ethics/sport/debate/drawingline_1.shtml [Accessed on 4 May 2017]
    
    Brotherton S, L., Fost N and Green, G, A. (2004) ‘Performance-Enhancing Drugs in Sports.’ The AMA Journal of Ethics. Vol. 6(7)
    
    Collins., 2017. ‘Definition of ‘ethics’.’ Harper Collins Publisher Limited. [Online] available from https://www.collinsdictionary.com/dictionary/english/ethics [Accessed on 4 May 2017]
    
    Gram T. 2008. ‘The Loss of Ethics, Morals, and History in the Sports Word.’ Bleacher Report. [Online] available from http://bleacherreport.com/articles/44743-the-loss-of-ethics-morals-and-history-in-the-sports-world [Accessed on 4 May 2017]
    
    Hanson, K, O nd Savage, M. 2012. ‘What role does ethics play in sports?’ Santa Clara University. [Online] available from https://www.scu.edu/ethics/focus-areas/more/resources/what-role-does-ethics-play-in-sports/ [Accessed on 4 May 2017]
    
    Keller T. 2013. ‘4 Ethical issues in sports that professionals need to know.’ Online. [Online] available from http://online.shorter.edu/business/ethical-issues-sports-management/ [Accessed on 4 May 2017]
    
    Kirkup, J. 2015. ‘Athletics doping crisis is just another reason to allow drugs in sport.’ The Telegraph. [Online] available from http://www.telegraph.co.uk/sport/othersports/drugsinsport/11778747/Athletics-doping-crisis-is-just-another-reason-to-allow-drugs-in-sport.html [Accessed on 4 May 2017]
    
    Kreider, R, B., Wilborn, C, D., Taylor, L., Campbell, B., Almanda, A, L., Collins, R., Cooke, M., Earnest, C, P., Greenwood, M., Kalman, D, S., Kerksick, C, M., Kleiner, S, M., Leutholtz, B., Lopez, H., Lowery, L, M., Mendel, R., Smith, A., Spano, M., Wildman, R., Willoughby, D, S., Ziegnfuss, T, N and Antonio, J. (2010) ‘ISSN exercise and sport nutrition review: research and recommendations.’ Journal of the International Society of Sports Nutrition. Vol. 7(7). Doi: 10.1186/1550-2783-7-7
    
    Mill D, V. 2015. ‘Why are we so opposed to performance-enhancing drugs in sport?’ The Conversation. [Online] available from http://theconversation.com/why-are-we-so-opposed-to-performance-enhancing-drugs-in-sport-46528 [Accessed on 4 May 2017]
    
    Rodriguez, N, R., DiMarco, N, M, and Langley, S. 2010. ‘Nutrition and Athletic Performance.’ Medscape. [Online] available from http://www.medscape.com/viewarticle/717046_11 [Accessed on 4 May 2017]
    
    Rosa, B, A., 2015. ‘Ethics in Sport – Guideline for Teachers.’ [Online] available from http://www.pned.pt/media/31479/Ethics-in-Sport-Guidelines-for-Teachers.pdf [Accessed on 4 May 2017]
    
    Vernec, A, R. (2013) ‘Doping, Ethics, and the Sport Physician.’ The Journal of Current Sports Medicine Reports. Vol. 12 (5), p 283-284`,
    date: "May 10, 2017",

    writer: "Paddy Henderson",
  },

  {
    id: 9,
    type: ServiceCategories.TV_AND_FILM || ServiceCategories.ALL,
    authorImageSrc: AUTHOR_IMAGE,
    authorImageAlt: "paddy henderson",
    imageSrc: BLOG_9_IMAGE,
    imageAlt: "service-5",
    title: "Johan Cruyff: The Master of Modern Football",
    shortDescription: "Showfar is an application which allows",
    description: `From what I've seen and heard, football came too easy for Johan Cruyff. His mind was Scandinavian in design, his genius lay in the simplicity of his thoughts.


    With the one-year anniversary of the Cruyff's death fast approaching, I spent some time studying the great man and to capture his elegance as a footballer, even simply as an athlete, it’s obsolete to look just within the sport.
    
    
    Whilst all around him were in search of the woods they thought lay beyond the trees, Cruyff could pick out every branch and every leaf, with the clear vision and forethought to see beyond the soil they grew in.
    
    
    Football can be frantic: the pace; the atmosphere of the crowd; the pressure from the coaches; it takes something special to look at a situation and see things for exactly how they really are on the pitch despite your surroundings.
    
    
    Cruyff was something special. Special in his originality. Special in his ability to make the obvious seem complex and the simplest of actions seem like magic. Look at the turn to which he has given his name. Just like a magic trick, simple and effortlessly effective in its execution.
    
    
    The revered moment we’ve watched a million times is sublime in its ease. As Cruyff comes back inside on to his right foot, Sweden’s Jan Olsson, extends his left leg in desperation to block the mercurial Dutchman’s cross into the box. Face contorted by his determination, Olsson's eyes shut tightly, waiting for the contact of the ball on his body. It never comes. Cruyff feigns to strike the ball but aborts the action at the final moment, dropping his left shoulder and dragging the ball back through his own legs and away from his Swedish assailant with the instep of his foot.
    
    
    Watch it back on the Internet. Pause it at that exact moment. Everything encapsulating Cruyff is right there in those ten seconds of play. That is what Johan Cruyff wanted from football, not just to win but be aesthetically satisfying too. Essentially what he created was art.
    
    
    "If football is an art form, then the Cruyff turn is from the Cistine Chapel."
    
    
    There were honours too. European cups? There were four, including three as a player at Ajax and one as manager of Barcelona. League titles? Fourteen of those. He was also the first player to win the European footballer of the year three years in a row in 1971, ’72 and ’73.
    
    
    Maradona, Pele, Lionel Messi and maybe even Cristiano Ronaldo are pushed to the top of everyone's greatest-ever footballer list, but for his influence on the game itself and the way it’s played today, Johan Cruyff is without peers.
    
    
    Cruyff implemented a seismic shift in the way we thought about football. With help he smashed the stale rigidity of tactics and philosophies in football and created a much more fluid style that was more akin to that of symphonic orchestra, each section overlapping and intertwining with the others, with Cruyff as the conductor.
    
    
    His then Barcelona 'Dream Team' were catalytic, inspirational and shone with renaissance brilliance, at a really dark time.
    
    
    All the way through his career as a player and then as a coach, he thought about the game intensely and his withdrawal from top level management in 1996 can also be held as the start of the decline which has lead Dutch football to the state it finds itself in today. When Cruyff stopped thinking, Dutch football did too.
    
    
    The true legacy he leaves behind him can be seen at the Nou Camp in Barcelona, the German national side who dominate today and in every side who want to play beautiful football.
    
    
    In 1979 Cruyff laid the foundations for La Masia, Barcelona’s famed youth academy, where he would copy the system in place at his beloved Ajax, designed to nurture a player from infancy into to the first team by playing exactly the same way throughout their football education. A system which has become a conveyor belt of greatness, individually and collectively.
    
    
    Even as an outfield player he revolutionised goalkeeping, his dream of a keeper becoming a footballer who wears gloves might be a reality now but his idea is forty years old.
    
    
    A visionary whose ideas were way beyond his time. Cruyff didn’t just give the world “Total Football”, he gave us football as we know it today. We should rightly mourn the loss of the most influential man football has ever seen, but more than anything we should say “Thank you.” to Hendrik Johannes Cruyff. 1947 - 2016.`,
    date: "Mar 20, 2017",
    writer: "Paddy Henderson",
  },

  {
    id: 10,
    type: ServiceCategories.TV_AND_FILM || ServiceCategories.ALL,
    authorImageSrc: AUTHOR_IMAGE,
    authorImageAlt: "paddy henderson",
    imageSrc: BLOG_10_IMAGE,
    imageAlt: "service-5",
    title: "Johhny Herbert: I thought I'd never race again",
    shortDescription: "Showfar is an application which allows",
    description: `Just after 6 o’clock on an ill-lit November evening, a day where he had not long returned home from a blockbuster Brazilian Grand Prix, Johnny Herbert sits comfortably, legs folded, beer in hand in the business suite of the St Pierre Hotel. It’s cold, wet & windy outside, but Herbert, despite being fatigued by jet lag, is bright-eyed and ready to talk about the defining moment in his two-decade-long career in Motorsport.


    It has been almost 29 years since a handful of Formula 3000 spectators were not entirely sure what they had just heard.  Out of sight, before the cars came in to view below the bridge, a thunderclap of shocking energy resonated through the concrete parapet of Brands Hatch and out into the surrounding woodland. 
    
    
    A split-second earlier, Herbert was at the forefront of an ear-splitting double-impact crash which rang out obscenely through the grandstand.
    
    
    The crash was, for Herbert, a violent conclusion to what was one of the largest chain-reaction accidents ever to occur on British racing asphalt. In seconds, the undulating stretch of track resembled the scene of an aircraft disaster. Amid the dense forest of the Brands Hatch Grand Prix loop, a motorsport horror had played out in a shower of wheels and carbon fibre, amongst a fervent ambition that for Johnny had been, self admittedly, burned far too intensely that afternoon.
    
    
    “Going into the Brands [Hatch] weekend, I was on such a high, I was probably over confident after hearing my name associated with the likes of Williams, Lotus, Benneton and Ferrari.
    
    
    “I qualified on pole and I knew if I got away well the others would struggle to catch me. The lights went out and I was gone, but a few laps in I saw red flags so the race was restarted and it was back to the grid.
    
    
    “The second restart was a shocker for me and it was dominoes from there. I remember the crash coming up so fast and I remember it all so well. My rear right was [Wheel] was clipped and I lost control of the car, so I braced myself for impact. My head jolted forward and I was spinning around, my car had exited under the bridge sideways after that initial impact, then about another 20 meters down with the front of the car already missing I had the second hit with my feet hanging out the front.
    
    
    “I remember opening my eyes, looking down where the rest of the car should have been and all I could see was this big hole and my first thought was that I had lost my legs from the knee down and that I’d never race again.”
    
    
    Fortunately for the then 24-year-old, that was not the case. Herbert suffered several career-threatening injuries, most severely to his lower legs, ankles and feet. The threat of amputation loomed for a while, only passing after multiple surgeries and months of physiotherapy, though the extent of his injuries would permanently hinder his mobility.
    
    
    “The therapy and surgeries weren’t over such a long period, but it felt like a lifetime. I had lost parts of my toes, my heel wasn’t where a heel should be and I was told I’d struggle to run ever again.
    
    
    “But, for me, it wasn’t about running, walking or dancing. Although I can still cut a shape or two (he chuckled). It was about racing. Everything I had done up until that point in my life had been about racing. I just wanted to race.”
    
    
    And race he did! In quite remarkable fashion, against all the odds, by 1989 Johnny Herbert was back in the monocoque of a racing car, and this time on the most elite stage of all… Formula 1.
    
    
    “It was a dream come true to be able to race again, let alone be behind the wheel of a Formula 1 car. I met with the guys at Benneton and they helped me train. I was power walking at altitude, swimming & biking mile after mile, until eventually, I was fit enough to challenge the likes of Senna, Mansell, Prost."
    
    
    On March 26th 1989, the true test of how well Johnny had recovered from his terrible injuries was to come, when he made his F1 race debut for Benetton in Brazil. He finished an amazing fourth, behind winner Nigel Mansell, McLaren's Alain Prost, and local hero Mo Gugelmin. His teammate, Alessandro Nannini, was sixth. It was the most stunning F1 debut for nearly 20 years. But Johnny was suffering, and the quick circuit wasn't a reliable indicator of how far down the road to recovery he had travelled.
    
    
    "I was in pain," says Herbert. "I always remember when I first went out qualifying that there was a particularly big bump at the hairpin before the back straight, which really hurt my left foot when I hit it. I learned to let my foot just flop around and, when I hit the bump, it would hit the side of the cockpit. It would hurt like hell but sort of killing the pain after that.
    
    
    “All in all, I had a decent career in F1, I won a few races, set a few fastest laps, but I’d have loved to have been World Champion. That’s the only missing piece in my puzzle.”
    
    
    Although what happened in 1988 at Brands Hatch did affect what Johnny went on to do competitively, the cheeky chap from Essex will always remain one of Formula One’s nice guys.`,
    date: "Jan 2, 2017 ",
    writer: "Paddy Henderson",
  },

  {
    id: 11,
    type: ServiceCategories.TV_AND_FILM || ServiceCategories.ALL,
    authorImageSrc: AUTHOR_IMAGE,
    authorImageAlt: "paddy henderson",
    imageSrc: BLOG_11_IMAGE,
    imageAlt: "service-5",
    title: "The Imitation Game - Film Review",
    shortDescription: "Showfar is an application which allows",
    description: `“Are you paying attention?” breathes Benedict Cumberbatch’s Alan Turing at the onset of this rivetingly engrossing and deeply melancholic thriller crafted by Norwegian director Morten Tyldum. Immersed in Tyldum’s world, who previously helmed the tonally contrasting 'Headhunters', audiences are served a stirring blend of code-cracking wartime excitement tinged with a sharp, somber hue. This narrative of British determination is accentuated by a nod to Turing’s legacy, who as Gordon Brown articulated, “deserved so much more.”


    Given a posthumous royal pardon for his “gross indecency” conviction just recently, the mathematician and AI visionary shifted the war’s trajectory, only to later grapple with the harshness of arrest and “chemical castration”. He met his end in 1954, seemingly from a poisoned apple's fatal bite.
    
    
    However, 'The Imitation Game' is more than a mournful tale – it shines a light on Turing’s remarkable feats, portraying its central figure as a valiant maverick. Echoing the sentiments of Graham Moore’s evocative script: “Sometimes it's those whom none think much of, who achieve the unimaginable.”
    
    
    Invited, albeit hesitantly, by Commander Alastair Denniston (an ever disdainful Charles Dance) to collaborate with the nation’s intellectual elites at Bletchley Park in 1939, Cumberbatch’s intriguingly cryptic Turing wins over Churchill, garnering funds to devise a pioneering machine (the “Bombe”) to decipher the Germans' elusive Enigma code.
    
    
    Parallelly, the astute Cambridge maths graduate Joan Clarke (embodied by Keira Knightley) employs her puzzle-solving prowess to secure her spot on Turing’s squad and, unexpectedly, in his personal circle. As Turing's intricate machine springs to life, he grapples with understanding the intricacies of human connections, his concealed sexuality, and memories of a past friend who becomes an echoing presence.
    
    
    Delving deeper than Hugh Whitemore’s 1986 play 'Breaking the Code' (which saw a BBC adaptation in 1996 with Derek Jacobi reprising Turing), Graham Moore’s agile script weaves through three distinct epochs: Turing’s formative years with his confidant Christopher, emphasizing human enigmas; his critical role at Bletchley Park, particularly the renowned “Hut 8”; and the 1952 intrusion at Turing’s residence in Manchester that unveiled his homosexuality, leading to dire ramifications.
    
    
    Although dramatic liberties ranged from expected to contentious (biographer Andrew Hodges, whose book inspired the film, pointed out exaggerations in Turing's relationship with Joan), most artistic choices served to captivate cinema-goers. The real-life “Bombe” might have been more discreet, but on screen, its vast network of cables visually maps Turing's intricate thoughts.
    
    
    Importantly, Tyldum portrays the deep connection between Alan and his invention, hinting at its significant role in his life (“You are a monster!” an exasperated Joan exclaims). The film’s title itself alludes to Turing’s conceptual game to determine if one's interlocutor was human or machine – a precursor to the 'Blade Runner's Voight-Kampff test.
    
    
    Just as Deckard was drawn to the android Rachael, Turing finds solace in machines over humans. Both he and his invention strive to decrypt messages lacking an intuitive guide, strangers questing for mutual understanding.
    
    
    Amid such an enigmatic lead, 'The Imitation Game' could have veered towards aloofness. Kudos to Cumberbatch for endowing his character with depth, not just layers. While the film's narrative is crisp and direct, Turing's underlying intentions remain tantalizingly shrouded, leading one to speculate on his true allegiance. Commendations to the emerging talent, Alex Lawther, for a compelling portrayal of a young Turing, setting the stage for Cumberbatch’s nuanced act.
    
    
    Surrounding the enigmatic Turing is a cast of vividly realized allies and adversaries, impeccably chosen and brilliantly enacted. Mark Strong dazzles as the shrewd Major General Stewart Menzies, blending threat with charm. Matthew Goode feels right at home as the charismatic Hugh Alexander. And Knightley, though occasionally leaning into her character’s cerebral archetype, infuses Joan with genuine warmth, acting as a mirror through which we perceive the ever-enigmatic Turing.`,
    date: "Nov 2, 2016",
    writer: "Paddy Henderson",
  },

  {
    id: 12,
    type: ServiceCategories.TV_AND_FILM || ServiceCategories.ALL,
    authorImageSrc: AUTHOR_IMAGE,
    authorImageAlt: "paddy henderson",
    imageSrc: BLOG_12_IMAGE,
    imageAlt: "service-5",
    title:
      "Shaqiri: Greece 2004 & Denmark '92 shocks show Switzerland can succeed at Euro 2016",
    shortDescription: "Showfar is an application which allows",
    description: `The former Bayern Munich and Inter winger is confident that his country can cause a stir in France this month, just like a couple of shock winners from the past.


    The 24-year-old, who has already racked up 51 international appearances for his country, scoring 17 times in the process, says that both he and his team-mates are in fine fettle at the moment and feeling confident of springing a major surprise in France this summer.
    
    
    “I’m feeling good ahead of the tournament. I think we [Switzerland] can go further than a lot of people think.” Shaqiri told Goal.
    
    
    “Two small teams have won before, Greece in 2004 and Denmark before that. I’m not saying we’ll win, but I don’t think we should be written off.”
    
    
    Indeed, Shaqiri is confident that his side will make the last 16, despite having to face some tough opposition in group stage.
    
    
    Romania and Albania join Switzerland in Group A alongside tournament hosts France, whom the Stoke City man recognises as being the clear frontrunners to top the pool.
    
    
    “It’s a tough group with France, who are, of course, favourites, but I think we’ll get out of the group and hopefully the momentum will take us on further.”
    
    
    Shaqiri made his international debut in 2010, aged 18, and after helping his nation reach the quarter-finals of World Cup 2014, he played a key role in Switzerland finishing second in their Euro 2016 qualifying group, behind England, where he is now playing his domestic football.
    
    
    He arrived at The Britannia Stadium from Inter in August 2015 for a club record fee of £12 million (€15.4m) and is hoping to be better attuned to the English game next season, after a gruelling debut campaign in the Premier League.
    
    
    “I’ve enjoyed English football and it’s prepared me well for this summer," he explained. "But I think I’ll have adjusted better to the League by next season.
    
    
    "However, for now, I’m focused on performing for my country. We have some good players and if we all do what we are able to, we will do well.”
    
    
    Shaqiri's Switzerland side face Albania in their opening Euro 2016 game in Lens on Saturday at 1500CET.`,
    date: "Jun 10, 2016",

    writer: "Paddy Henderson",
  },
  {
    id: 13,
    type: ServiceCategories.TV_AND_FILM || ServiceCategories.ALL,
    authorImageSrc: AUTHOR_IMAGE,
    authorImageAlt: "paddy henderson",
    imageSrc: BLOG_13_IMAGE,
    imageAlt: "service-5",
    title: "Charlie Adam reveals he will be supporting Ireland at Euro 2016",
    shortDescription: "Showfar is an application which allows",
    description: `Martin O’Neill’s men may have dashed his own hopes of playing in France but the Stoke midfielder still plans to cheer on his “pals” in the Republic of Ireland squad.


    Despite Scotland’s failure to qualify for Euro 2016, Stoke City midfielder Charlie Adam has revealed to Goal that he still hopes to travel to France this month to support his team-mates in the Republic of Ireland squad.
    
    
    Adam and his compatriots finished fourth in their group, pipped to third spot by the Irish, who saw off Bosnia-Herzegovina in the play-offs.
    
    
    Given Jon Walters, Marc Wilson, Shay Given and Glenn Whelan will thus be at the Euros this summer, Adam intends to throw his support behind Scotland’s Celtic cousins.
    
    
    “I’ll try and spend a couple of days in France,” the former Liverpool playmaker told Goal. “It’s right on the doorstep and I’d like to see the Irish lads from here [Stoke] do well.
    
    
    “It’s great for them to get a chance to go to the Euros and play; they deserve it. They got the results that mattered in qualifying.
    
    
    “I’ll be rooting for the home nations, of course, but some of the Ireland lads are my pals, so I’ll be keeping a closer eye on them.”
    
    
    Adam featured in both games against Ireland during qualifying, as the Scots triumphed in Glasgow before picking up a point in Dublin.
    
    
    However, a shock loss in Georgia ultimately cost Gordon Strachan’s side dearly, allowing ‘The Boys in Green’ to set up a play-off against the Bosnians.
    
    
    Walters netted both goals in Ireland’s second-leg win over the Eastern European outfit and Adam admits that he was enthused by his friend’s success.
    
    
    “I was delighted to see my buddy Jonny [Walters] score twice against Bosnia and I’m equally delighted for the other Stoke lads who have done a great job too,” he added.`,
    date: "Jun 7, 2016",

    writer: "Paddy Henderson",
  },

  {
    id: 14,
    type: ServiceCategories.TV_AND_FILM || ServiceCategories.ALL,
    authorImageSrc: AUTHOR_IMAGE,
    authorImageAlt: "paddy henderson",
    imageSrc: BLOG_14_IMAGE,
    imageAlt: "service-5",
    title: "Birdman - Film Review",
    shortDescription: "Showfar is an application which allows",
    description: `"Birdman" (or The Unexpected Virtue of Ignorance) - 7.2/10 (1200 words)

    In Alejandro G. Iñárritu's "Birdman", a portrait of complex psychology emerges. The film is a tightrope walk between artistic genius and sheer madness, providing a tantalizing glance into the ephemeral world of fame and the lingering ghosts of one's prime. Through Riggan Thomson (played by Michael Keaton), we traverse the narrow alleys of a mind tormented by past successes that have set a standard too high for the present.
    
    
    The decision to present the film as a single, continuous shot is a metaphorical journey through Riggan's mind, unbroken and relentless. Every corner turned, every hallway crossed, and every door opened reveals another facet of his fractured psyche. Through this continuous gaze, we get a sense of time's linear progression, with the past being as omnipresent as the looming future.
    
    
    Keaton's performance is nothing short of remarkable. One can't help but draw parallels between the actor's real-life association with Batman and his character's haunted past as the fictional superhero, Birdman. This meta-casting, which could have been a mere gimmick in a lesser film, becomes a poignant reflection on the transient nature of stardom.
    
    
    Emma Stone, as Sam, Riggan's daughter, portrays the challenging role of being the offspring of a once-great star. Through her eyes, we witness the weight of unmet expectations and the desire to carve an identity separate from the looming shadow of her father's legacy.
    
    
    "Birdman" is also a commentary on modern art and criticism. The clash between Riggan and a theatre critic in a bar throws light on the eternal struggle between art for art's sake and art for an audience. The dialogue, often sharp, witty, and biting, pierces through the illusion of the theater, revealing the vulnerabilities and insecurities of its players.
    
    
    However, for all its brilliance, "Birdman" can sometimes get caught in its own web of symbolism and abstraction. While it is a technical masterpiece with strong performances, its narrative ambiguity might alienate a portion of its audience. As the curtain falls, we're left to interpret the ending, the flights of fantasy, and the very nature of Riggan's reality.`,
    date: "Sep 3, 2015 ",

    writer: "Paddy Henderson",
  },
];
