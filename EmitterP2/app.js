var Emitter = require('events');
var eventConfig = require('./config');

var emitter = new Emitter();

emitter.on(eventConfig.SCORES_BAD, function() {
    console.log("Một môn nào đó bị điểm kém !!!");
});

emitter.on(eventConfig.SCORES_BAD, function () {
    console.log("Đã có điểm kém, cần phải thông báo tới phụ huynh");
})

var scores = [10, 4];

for(var s of scores) {
    if(s < 5) {
        console.log("Điểm thấp quá", s);
        emitter.emit(eventConfig.SCORES_BAD);
    }
}