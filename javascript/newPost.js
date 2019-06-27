function newPost() {
    var theAuthor = prompt('What is your @?')
    var theContent = prompt('What would you like to post?')
    if(theAuthor === null || theContent === null) {
        alert('You must fill out all questions.')
    } else {
        const postContainer = document.getElementById('post-container')

        var div = document.createElement('div')
        div.setAttribute('id', 'post')

        var br = document.createElement('br')
        br.setAttribute('id', 'post-break')
        div.appendChild(br)

        var author = document.createElement('p')
        author.innerHTML = '@' + theAuthor
        author.setAttribute('id', 'post-author')
        div.appendChild(author)

        var content = document.createElement('p')
        content.innerHTML = theContent
        content.setAttribute('id', 'post-content')
        div.appendChild(content)

        const date = new Date()
        var theTimecode = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear() + ' ' + date.toLocaleString('en-US', {hour: 'numeric', minute : 'numeric', hour12: true})
        var timecode = document.createElement('p')
        timecode.innerHTML = theTimecode
        timecode.setAttribute('id', 'post-timecode')
        div.appendChild(timecode)

        postContainer.appendChild(div)
    }
}
