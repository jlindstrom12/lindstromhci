
import { care } from './care.js';
import { cafe_dashboards } from './cafe_dashboards.js';
import { FabRobotics } from './FabRobotics.js';
import { MoodMoji } from './MoodMoji.js';
import { bokeh } from './bokeh.js';
import { Faulty } from './faulty_robots.js';
import { DREaM } from './DREaM.js';



// Function to get query parameters from the URL
function getQueryParams() {
    const params = {};
    const queryString = window.location.search.substring(1);
    const queries = queryString.split("&");

    queries.forEach(function(query) {
        const [key, value] = query.split("=");
        params[key] = decodeURIComponent(value || "");
    });

    return params;
}

// Function to set project details based on the query parameter
function setProjectDetails() {
    const params = getQueryParams();
    const projectName = params.project;

    if (projectName) {
        // Customize these details for your specific projects
        const projectDetails = {
            'CareCompanion': {
                title: 'CareCompanion: Transforming Medical Support',
                date: 'Date: September 2023',
                team: 'Team: Solo',
                imgSrc: '../Images/covers/Care.png',
                content: care
            },

            'CafeDashboards': {
                title: 'Cafe 23: Admin & Employee Centered Dashboard Design',
                date: 'January - May 2023',
                team: 'Team: Solo',
                imgSrc: '../Images/cafe/Dashboard_Mockup.png',
                content: cafe_dashboards
            },

            'FabRobotics': {
                title: 'FabRobotics: Fusing 3D Printing with Mobile Robots to Advance Fabrication, Robotics, and Interaction',
                date: 'June - August 2023',
                team: 'Team: Ken Nakagaki(Advisor), Ramarko Bhattacharya(Research Partner), Ahmad Taka(Research Partner)',
                imgSrc: '../Images/FabRobotics/Fab_home.png',
                content: FabRobotics
            },

            'MoodMoji': {
                title: 'M😜🥳dM🙃ji: Harnessing Persuasive Design to Address Procrastination',
                date: 'Jan - May 2024',
                team: 'Team: ',
                imgSrc: './Images/MoodMoji/Mood_Mocks.png',
                content: MoodMoji
            },
            'BokehJS': {
                title: 'Bokeh: XXX',
                date: 'Oct - Dec 2023',
                team: 'Team: ',
                imgSrc: './Images/bokeh/Logo.png',
                content: bokeh
            },
            'DREaM': {
                title: 'DREaM: Distant Reading Early Modernity',
                date: 'Jan - May 2024',
                team: 'Team: Juan Pablo Urista, Kevin Wang, & Ryan Wang',
                imgSrc: './Images/DREaM/DREaM_home.png',
                content: DREaM
            },
            'Faulty_Robots': {
                title: 'Faulty Robots',
                date: 'Jan - May 2024',
                team: 'Team: Al Hassen, Luke Han, & Animesh Ghose',
                imgSrc: './Images/faulty_robots/home_screen.png',
                content: Faulty
            },
            // Add more projects here
            // 'AnotherProject': {
            //     title: 'Another Project Title',
            //     date: 'Date: October 2023',
            //     imgSrc: '../Images/covers/Another.png',
            //     content: 'Another project description.'
            // }
        };

        const project = projectDetails[projectName];

        if (project) {
            document.getElementById("title").textContent = project.title;
            document.getElementById("date").textContent = project.date;
            document.getElementById("team").textContent = project.team;
            document.getElementById("project_img").src = project.imgSrc;
            document.getElementById("project_img").alt = `${projectName} Home Screens`;
            document.getElementById("fill_content").innerHTML = project.content;
        } else {
            document.getElementById("title").textContent = "Project not found";
            document.getElementById("date").textContent = "";
            document.getElementById("team").textContent = "";
            document.getElementById("project_img").src = "";
            document.getElementById("project_img").alt = "";
            document.getElementById("fill_content").textContent = "No project details available.";
        }
    } else {
        document.getElementById("title").textContent = "Project not specified";
        document.getElementById("date").textContent = "";
        document.getElementById("team").textContent = "";
        document.getElementById("project_img").src = "";
        document.getElementById("project_img").alt = "";
        document.getElementById("fill_content").textContent = "No project details available.";
    }
}

// Call the function to set project details when the page loads
window.onload = setProjectDetails;
