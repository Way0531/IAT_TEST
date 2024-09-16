define(['questAPI'], function(Quest){
    let API = new Quest();
    let isTouch = API.getGlobal().$isTouch;

    // ### Questions
    API.addQuestionsSet('basicSelect', {
        type: 'selectOne',
        autoSubmit: false,
        numericValues: true,
        required: true, // 強制回答問題
        style: 'multiButtons',
        answers: [
            '1<span style="font-size:0.8em;"> - 完全不認同/完全不符合</span>',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7<span style="font-size:0.8em;"> - 完全認同/完全符合</span>'
        ],
        errorMsg: {required: "此題項為必填"},
    });

    API.addQuestionsSet('competence', [
        {inherit: 'basicSelect', name: 'com_01', stem: '1. 我接受過足夠的臨床訓練與督導，以服務男同性戀、女同性戀與雙性戀身份的個案。'},
        {inherit: 'basicSelect', name: 'com_02', stem: '2. 同志個案的生活型態是不自然或不道德的。'},
        {inherit: 'basicSelect', name: 'com_03', stem: '3. 我透過諮詢、督導與繼續教育來確保自己的同志諮商技巧。'},
        {inherit: 'basicSelect', name: 'com_04', stem: '4. 我曾有過與男同性戀個案諮商的經驗。'},
        {inherit: 'basicSelect', name: 'com_05', stem: '5. 與異性戀個案相比，同志個案比較容易遭受到他們不喜歡的諮商處遇。'},
        {inherit: 'basicSelect', name: 'com_06', stem: '6. 就我目前的專業發展階段，我認為自己有能力、技巧與資格提供同志個案諮商服務。'},
        {inherit: 'basicSelect', name: 'com_07', stem: '7. 我曾有過與男同性戀或女同性戀個案進行伴侶諮商的經驗。'},
        {inherit: 'basicSelect', name: 'com_08', stem: '8. 我曾有過與女同性戀個案諮商的經驗。'},
        {inherit: 'basicSelect', name: 'com_09', stem: '9. 我知道有一些研究指出同志個案比起異性戀個案更容易被診斷出精神疾患。'},
        {inherit: 'basicSelect', name: 'com_10', stem: '10. 很顯然，兩個男性或兩個女性間的同性關係，並不如一男一女間的關係那樣穩定或更具承諾。'},
        {inherit: 'basicSelect', name: 'com_11', stem: '11. 我認為同志個案應該盡可能對自己的性傾向保持謹慎與低調。'},
        {inherit: 'basicSelect', name: 'com_12', stem: '12. 我曾參與過同志議題相關的心理專業在職訓練、研討會或工作坊。'},
        {inherit: 'basicSelect', name: 'com_13', stem: '13. 異性戀主義與具有偏見的觀念已經滲透到心理衛生專業領域中。'},
        {inherit: 'basicSelect', name: 'com_14', stem: '14. 我認為自己有能力在治療環境中評估同志的心理健康需求。'},
        {inherit: 'basicSelect', name: 'com_15', stem: '15. 我認為同志伴侶不需要特別的權利（例如：同居伴侶權、婚姻權），因為那將會破壞正常與傳統的家庭價值。'},
        {inherit: 'basicSelect', name: 'com_16', stem: '16. 影響男同性戀與女同性戀的心理及社會議題有所不同。'},
        {inherit: 'basicSelect', name: 'com_17', stem: '17. 如果我的個案將異性戀的生活型態視為理想的生活型態，那是最好不過的了。'},
        {inherit: 'basicSelect', name: 'com_18', stem: '18. 我曾有過與男性或女性的雙性戀個案諮商的經驗。'},
        {inherit: 'basicSelect', name: 'com_19', stem: '19. 我知道哪些體制上的阻礙可能會影響同志使用心理衛生服務。'},
        {inherit: 'basicSelect', name: 'com_20', stem: '20. 我知道諮商師經常將自身對於性傾向的價值觀強加到同志個案身上。'},
        {inherit: 'basicSelect', name: 'com_21', stem: '21. 我認為我的個案應該在某些層面上接受傳統的性價值觀。'},
        {inherit: 'basicSelect', name: 'com_22', stem: '22. 如果我的個案是同志，我目前並不具備足夠技巧或訓練去進行個案報告或諮詢。'},
        {inherit: 'basicSelect', name: 'com_23', stem: '23. 我認為同志個案會在與一位認同傳統價值觀與規範的異性戀諮商師的諮商中受益最多。'},
        {inherit: 'basicSelect', name: 'com_24', stem: '24. 在這個社會中，身為異性戀者具有一定的優勢。'},
        {inherit: 'basicSelect', name: 'com_25', stem: '25. 我認為諮商師與個案之間性傾向的差異，可能會成為在與同志個案進行有效能的諮商初期的障礙。'},
        {inherit: 'basicSelect', name: 'com_26', stem: '26. 我曾在同志議題的諮商演練中擔任過個案或諮商師。'},
        {inherit: 'basicSelect', name: 'com_27', stem: '27. 我個人認為同性戀是一種精神障礙或是一種罪，且可以透過諮商或是靈性協助來治療。'},
        {inherit: 'basicSelect', name: 'com_28', stem: '28. 我認為所有的同志個案都必須在兒童面前對自己的性傾向保持謹慎與低調。'},
        {inherit: 'basicSelect', name: 'com_29', stem: '29. 當談到同性戀時，我同意這樣的說法：「應該愛要罪人，但憎恨或譴責那罪。」'}
    ]);

    // ### Pages
    // Shows all questions, but the order is random.
    API.addPagesSet('basicPage', {
        header: '請根據您對於每個題項之描述的認同或符合程度進行填答，分數愈高代表認同或符合程度愈高。請務必填選最真實的分數，通常是您第一直覺反應。</br> *註：本量表中之「同志」所指的是<b>女同性戀者</b>、<b>男同性戀者</b>與<b>雙性戀者</b>（lesbian, gay and bisexual, LGB）。',
        headerStyle: {'font-size': '1.2em', 'line-height' : '1.3'},
        questions: {
            mixer: 'repeat',
            times: 29,
            data: [
                {inherit: {set: 'competence', type: 'sequential'}}
            ]
        },
        v1style: 2,
        decline: false,
        numbered: false
    });

    // ### Sequence
    API.addSequence([
        {inherit: 'basicPage'}
    ]);

    /**
    Return the script to piquest's god, or something of that sort.
    **/
    return API.script;
}); 
