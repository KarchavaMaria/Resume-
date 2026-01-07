import "./App.css";
import Header from "./components/Header/Header.jsx";
import About from "./components/About/About.jsx";
import ArticleAbout from "./components/About/ArticleAbout/ArticleAbout.jsx";
import Education from "./components/Education/Education.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Projects from "./components/Projects/Projects.jsx";

function App() {

    return (
        <div className="App">
            <Header/>
            <main>
                <About/>
                <ArticleAbout/>
                <Education/>
                <Skills/>
                <Projects/>
                <Contact/>
            </main>
            <Footer/>
        </div>
    )
}

export default App;
