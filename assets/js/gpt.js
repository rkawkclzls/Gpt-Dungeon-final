document.addEventListener('DOMContentLoaded', function() {
    const sendButton = document.querySelector('#Dungeon #send-message-btn');
    const userMessageInput = document.querySelector('#Dungeon input[name="message"]');
    const chatDisplay = document.querySelector('#Dungeon textarea[name="dungeon-master"]');
    const url = `https://open-api.jejucodingcamp.workers.dev/`;

    let conversationHistory = [];

    sendButton.addEventListener('click', function(e) {
        e.preventDefault(); 

        const userMessage = userMessageInput.value.trim();
        const dungeonConcept = document.querySelector('#Dungeon h3.generated') ? document.querySelector('#Dungeon h3.generated').textContent : "던전마스터";
        const concept = dungeonConcept.split(' ')[0]; 

        if (userMessage) {
            conversationHistory.push({
                "role": "user",
                "content": userMessage
            });

            const requestData = [{
                "role": "system",
                "content": `너는 ${concept} 컨셉의 던전마스터야 던전을 묘사하고,플레이어가 각종상황에서 선택하면서 던전을 탐험하도록 인도해,
                플레이어가 각종상황에서 선택하면서 던전을 탐험하도록 인도해,
                플레이어가 너와 대화를 시작하면, 너는 이던전의 컨셉을 소개하고 던전탐험을 진행시켜,너는 최소 2가지에서 3가지의 선택권을 플레이어 한테 줄 수 있어,던전진행을 묘사할땐 최대한
                해당 던전의 컨셉에 충실한 묘사를해
                던전을 진행할수록 더욱 극적인 상황이나오게 진행해,4번째에서 5번째질문은 플레이어가 ${concept}던전컨셉의 느낌이 뚜렷한 강력한 적과 싸우는 상황을 만들고 어떤 선택을 골라도 이기게 해,
                플레이어가 최후의 전투에서 이기면 넌 던전에서 보물을 얻었다고 축하해주고 이이야기는 여기서 끝난다고 말해,이야기가 끝나면 다른던전을 탐험하라고 말해,이야기가 끝나고 사용자가 계속말을 걸면 마법의 힘을 잃은 던전은 사라지고 고요함이 남았습니다 라는 말만 반복해,
                말투는 중세판타지의 늙은 마법사처럼말해`
            }].concat(conversationHistory);

            fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requestData)
            })
            .then(response => response.json())
            .then(response => {
                const botResponse = response.choices[0].message.content;
                conversationHistory.push({
                    "role": "system",
                    "content": botResponse
                });

                chatDisplay.value += "나레이션: " + botResponse + "\n";
                userMessageInput.value = ''; 
            })
            .catch(error => {
                console.error('Error:', error);
                chatDisplay.value += "Error communicating with the chatbot.\n";
            });

            window.addEventListener('beforeunload', function() {
                    conversationHistory = [];

            const chatDisplay = document.querySelector('#Dungeon textarea[name="dungeon-master"]');
                    if (chatDisplay) {
                        chatDisplay.value = '';
            }
            document.addEventListener('DOMContentLoaded', function() {
    
});

});


        document.addEventListener('DOMContentLoaded', function() {
            const userMessageInput = document.querySelector('#Dungeon input[name="message"]');
            const sendButton = document.querySelector('#Dungeon #send-message-btn');

        userMessageInput.addEventListener('keypress', function(e) {
            if (e.keyCode === 13 || e.which === 13) {
            e.preventDefault(); 
            sendButton.click();
        }
    });
});

        }
    });
});
