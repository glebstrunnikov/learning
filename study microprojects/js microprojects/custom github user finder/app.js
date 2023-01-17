let hideUI;

class Github {
    constructor() {
        this.client_id = '002983dd27384f1ff29b'
        this.client_secret = '5bec329a1eb084057d928ecc80ed1f0933e9f8df'
    }

    drawErr(msgText) {
        const errorMsg = document.createElement('div');
        errorMsg.className = "container-fluid error-message";
        errorMsg.style = "background-color:red"
        errorMsg.innerHTML = `
        <h4 style="color:white; padding:0.5em; text-align:center">${msgText}</h4>
        `;
        document.getElementById('header').after(errorMsg);
        hideUI = true;
        setTimeout(function() {document.querySelector('.error-message').remove()}, 1000)
        document.getElementById('resultProfile').style = "margin-bottom:1em; display: none";
        document.getElementById('resultRepos').style = "display: none";
    }

    checkErr(response) {
        if (response.status === 404) {this.drawErr('User not found!')}
        if (response.status === 403) {this.drawErr('Request limit exceeded!')}
        else
        {if (!response.ok) {throw new Error(response.error)}
        else {
            hideUI = false;
            return response
            };}
    }
    
    async sendRequestUser(username) {
        const response = await fetch(`https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        this.checkErr(response);
        const responseData = await response.json();
        return responseData
    }

    async sendRequestRepos(username) {
        const response = await fetch(`https://api.github.com/users/${username}/repos?client_id=002983dd27384f1ff29b&client_secret=5bec329a1eb084057d928ecc80ed1f0933e9f8df`);
        const responseData = await response.json();
        return responseData
    }
}

function UIUser (user) {
    hideUI != true ? (document.getElementById('resultProfile').style = "margin-bottom:1em; display: block") : null;
    document.getElementById('profileLinkBtn').href = user.html_url;
    document.getElementById('userpic').src = user.avatar_url;
    document.getElementById('companyOutput').textContent = `Company: ${user.company}`;
    document.getElementById('websiteOutput').textContent = `Website: ${user.blog}`;
    document.getElementById('locationOutput').textContent = `Location: ${user.location}`;
    document.getElementById('memberSinceOutput').textContent = `Member since ${user.created_at}`;
    document.getElementById('publicReposOutput').textContent = `Public repos: ${user.public_repos}`;
    document.getElementById('publicGistsOutput').textContent = `Public gists: ${user.public_gists}`;
    document.getElementById('followersOutput').textContent = `Followers: ${user.followers}`;
    document.getElementById('followingOutput').textContent = `Following: ${user.following}`;
}

function UIRepos (repos) {
    if (hideUI != true) {
    document.getElementById('resultReposTable').innerHTML = ""
    document.getElementById('resultRepos').style = "display: block"
    }

    // sort the array of repos
    function compareDates (repo1, repo2) {
        if (new Date(repo1.updated_at) < new Date(repo2.updated_at)) {
            return +1}
        if (new Date(repo1.updated_at) > new Date(repo2.updated_at)) {
            return -1}
        return 0
    };
    repos.sort(compareDates);

    for (let i = 0; i < 5; i++) {
        const repoLine = document.createElement('tr');
        repoLine.innerHTML = `
            <td style="width:50%"><a href="https://github.com/${repos[i].full_name}">${repos[i].name}</a></td>
            <td>
                <button id="starsOutput1" type="button" class="btn btn-primary btn-sm">Stars: ${repos[i].stargazers_count}</button>
                <button id="forksOutput1" type="button" class="btn btn-secondary btn-sm">Watchers: ${repos[i].watchers_count}</button>
                <button id="watchersOutput1" type="button" class="btn btn-success btn-sm">Forks: ${repos[i].forks_count}</button>
            </td>
        `
        document.getElementById('resultReposTable').appendChild(repoLine)
    }
}

const inputField = document.querySelector('#inputField')

document.querySelector('#inputField').addEventListener('keyup', sendRequests)

function sendRequests(e) {
    e.preventDefault()
    if (inputField.value != '') {
        const request = new Github
        request.sendRequestUser(inputField.value)
            .then(res => UIUser(res))
            .catch(err => console.log(err))

        request.sendRequestRepos(inputField.value)
            .then(res => UIRepos(res))
            .catch(err => console.log(err))
    }
}

