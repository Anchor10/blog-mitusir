$(function () {
        try {
            $('body').ripples({
                resolution: 512,
                dropRadius: 20, //px
                perturbance: 0.04,
            });
        }
        catch (e) {
            $('.error').show().text(e);
        }

    var a = $('.position-change'),
        b = a.offset(); //返回或设置导航栏相对于文档的偏移(位置)
    //加个屏幕滚动事件，c是滚动条相当于文档最顶端的距离
    $(document).on('scroll', function () {
            var c = $(document).scrollTop();
            if (b.top <= c) {
                a.css({
                    'position': 'fixed',
                    'top': '0px'
                })
            } else {
                a.css({
                    'position': 'relative',
                    'top': '0px'
                })
            }
        })

        //返回顶部
        !(function returnTop() {
            var totop = $("<div class='totop' style='cursor:pointer; width: 50px; height: 50px; position: fixed; left:50%; transform:translateX(520px); bottom: 120px; z-index: 999; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4MEU2QkU1QTlGMkFFNTExQjUxMThBNUQ1NjYwOEZDMCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGMTg4QjEzOTJFQjAxMUU1QkYyNENFOTI3OUY4Q0JBMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGMTg4QjEzODJFQjAxMUU1QkYyNENFOTI3OUY4Q0JBMyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkUwMEE4MUQyQTcyRUU1MTE5NENDRDU4NEE2MTM4MDIyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjgwRTZCRTVBOUYyQUU1MTFCNTExOEE1RDU2NjA4RkMwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+t+FyCQAAAt9JREFUeNrsmM1u2kAQx+2JkwOoUhFXkrRv0EhVxKVnHoCPF0gfI8eeeYLmNfhSJSL1CkqvfCgc2htKS4RIVSFQ5l/ZkuVis4S1oeyMNGi1dtiZ3/xnd4NdrVZty7Les39kf8f+yjpsm7J/Y//M3nHc5D+xn1pmGAr8gf0N+zXxx5VByfsNOV8BwIVlrl2QAT0f2Q5kGW4CQAAIAAEgAASAABAAAkAACAABIAAEQMKWyWR+wY0EgMQrlQrBdwmBdpi8k0ql8nCMdwUhcQDZbPahXC4TJ37pzWGMOTw7aACocqlUctLpdD74DHN4lrQSKMHK//RkH/aO1w5496AAIKFisXjkl30EhEu8mxQESkj2x6tkH2ZuOxwn0Q4Uc+UfcMypVH6VEvC3cW+MFGflWcqRPa8AIY/viFMJFFfy2Mw2kX1UO8R5T6A4ZB885yPsj+tr2yGuewLprnzYOb/CZoPB4AscY8WNUbsSSGPl157zPnvq9Xq39Xr9HI4x5lT2BN33BNKVvOo5j2r3+/12s9k8WywWR3CMMaeiBN33BNIke9Vz/m/lG40Gkne8SYwxp6oEnfcE2nbD2+Ccn3GCXuWd4EPM4RneUVWCjnvCiwEQ0bJQKPxW7XmW+G1Y8kEIeFd1T0AMiCVxAMvlkrrd7pKDvleQfTso+ygIbju010HA2ogBseykBTjIs1qtNoyAECn7dUqIagesibURw043weFweMrBDjig4aoNb9PkV0D4px2wFtbE2ntxDKIKfJ7fc2Ajv+xfmnyIEp7cuRHW2rbynjmWJuMbHaoxwKY0Yts2+SAE27bbb9l4/MNdy9orAC6E3Hg8fpzNZjkdyfshtFqtHJ//j5PJJKczZq0A2GwO8HUc/7XN5/MT/u6T//InsX02ASAABIAAEAACQAAIAAEgAASAABAApgKYGpz/FADuDAZwBwA37N8NTB453wBAh/2a/ash7TB1c0XOnWcBBgAvtKNBTPvHkAAAAABJRU5ErkJggg==); background-color: #fff; background-size: 100%; border-radius: 10px; display: none;'></div>");
            $("body").append(totop);
            $(document).on("scroll", function () {
                if ($(document).scrollTop() >= 300) {
                    totop.show();
                } else {
                    totop.hide();
                }
            })
            totop.on("click", function () {
                $("html,body").animate({
                    scrollTop: 0
                }, 500);
            })
        })();
})