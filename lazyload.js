



document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".blurb p").forEach(function(p) {
        // 可以根据实际情况调整触发条件
        p.classList.add("animate");
    });
});



document.addEventListener("DOMContentLoaded", function() {
    // 为所有类为'lead'的<p>标签添加'animate'类
    document.querySelectorAll(".lead").forEach(function(p) {
        p.classList.add("animate");
    });
});
