var editflag = false;

$(".announcement").click(function () {
	$("#text-modal .modal-title").text($(this).find(".announcement-title").text());
	$("#text-modal p").html($(this).find(".announcement-body").html());
	$("#text-modal .info").text($(this).find(".announcement-info").text());
	$("#text-modal .info-cont").show();
	$("#text-modal").modal("show");
	$("#text-modal .text-modal-body").animate({scrollTop: $("#text-modal .text-modal-body").offset().top});
});

$(".service").click(function () {
	$("#text-modal .modal-title").text($(this).find(".service-head").text());
	$("#text-modal p").html($(this).find(".service-text").html());
	$("#text-modal .info-cont").hide();
	$("#text-modal").modal("show");
	$("#text-modal .text-modal-body").animate({scrollTop: $("#text-modal .text-modal-body").offset().top});
});

$(".course-card").on("click", ".delete-button", function () {
	let listItem = $(this).parent().parent().parent();
	if (listItem.hasClass("new")) {
		listItem.remove();
	} else {
		listItem.hide();
	}
});

$(".course-card").on("click", ".add-button", function () {
	let btn = $(this);
	let text = btn.parent().siblings("input").val().trim();
	if (text !== '') {
		btn.parent().siblings("input").val('');
		$('<div class="list-group-item new"><div class="row"><div class="col prof-name"><span>' + text + '</span></div><div class="col"><button type="button" class="btn btn-students float-right delete-button">-</button></div></div></div>').insertBefore(btn.parent().parent().parent().parent().parent());
	}
});

$("#edit-btn").click(function () {
	let editbtn = $(this);
	let textedits = $('.text-edits');
	if (!editflag) {
		editbtn.html('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="cpath" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/><path d="M0 0h24v24H0z" fill="none"/></svg> <span class="d-none d-md-inline">Καταχώρηση</span>');
		$('<button class="btn btn-outline-students float-right mt-1 ml-3" id="edit-back"><svg xmlns="http://www.w3.org/2000/svg" class="px-auto py-auto" width="24" height="24" viewBox="0 0 24 24"><path class="cpath" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></svg></button>').insertBefore(editbtn);
		textedits.hide();
		$('<textarea class="form-control"></textarea>').insertAfter(textedits);
		let textareas = textedits.siblings("textarea");
		for (let i = 0; i < textareas.length; i++) {
			textareas.eq(i).val(textedits.eq(i).text());
		}
		$('<div class="col"><button type="button" class="btn btn-students float-right delete-button font-weight-bold">-</button></div>').insertAfter($(".prof-name"));
		$('<div class="list-group-item"><div class="row"><div class="col"><div class="input-group mb-3"><input type="text" class="form-control" placeholder="Εισάγετε κείμενο..." aria-label="Εισάγετε κείμενο"><div class="input-group-append"><button class="btn btn-students add-button"type="button"><span class="d-block d-md-none font-weight-bold">+</span><span class="d-none d-md-block">Προσθήκη</span></button></div></div></div></div></div>').insertAfter($(".edit-list .list-group-item:last-child"));
		$('<div class="row fileform"><div class="col-8 col-md"><div class="filename">Επιλέξτε αρχείο...</div></div><div class="col"><button class="btn btn-students upload-btn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path class="cpath" d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z" /></svg></button><input type="file" class="d-none"></div></div>').insertAfter($(".link-group"));
	}
	else {
		editbtn.html('<svg xmlns="http://www.w3.org/2000/svg" class="mb-1" width="20" height="20" viewBox="0 0 24 24"><path class="cpath"d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" /><path d="M0 0h24v24H0z" fill="none" /></svg> <span class="d-none d-md-inline">Επεξεργασία</span></button>');
		editbtn.siblings('button').remove();
		textedits.siblings('textarea').remove();
		textedits.show();
		$(".course-card .delete-button").parent().remove();
		$(".edit-list .list-group-item:last-child").remove();
		$(".list-group-item.new").removeClass("new");
		$(".fileform").remove();
	}
	editflag = !editflag;
});

$(".card-header").on("click", "#edit-back", function () {
	let textedits = $('.text-edits');
	$("#edit-btn").html('<svg xmlns="http://www.w3.org/2000/svg" class="mb-1" width="20" height="20" viewBox="0 0 24 24"><path class="cpath"d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" /><path d="M0 0h24v24H0z" fill="none" /></svg> <span class="d-none d-md-inline">Επεξεργασία</span></button>');
	$(this).remove();
	textedits.siblings('textarea').remove();
	textedits.show();
	$(".course-card .delete-button").parent().remove();
	$(".edit-list .list-group-item:last-child").remove();
	$(".list-group-item.new").remove();
	$(".list-group-item:hidden").show();
	$(".fileform").remove();
	editflag = false;
});

$(".course-card").on("click", ".upload-btn", function () {
	$(this).siblings("input").trigger("click");
});

$(".course-card").on("change", "input[type='file']", function () {
	$(this).parent().siblings(".col").children(".filename").text($(this).val());
});

$(".widget-btn").click(function(){
	if(document.documentElement.clientWidth >= 768){
		if ($(".widget").hasClass("collapsed")){
			$(".widget").removeClass("collapsed");
			$(".widget").addClass("expanded");
			$(".widget-body-content").show();
		}
		else{
			$(".widget").addClass("collapsed");
			$(".widget").removeClass("expanded");
			$(".widget-body-content").hide();
		}
	}
	else{
		$(".widget-body-content").show();
		$("#text-modal .modal-title").text("");
		$("#text-modal p").html($(".widget-body").html());
		$("#text-modal .info-cont").hide();
		$("#text-modal").modal("show");
		$("#text-modal .text-modal-body").animate({scrollTop: $("#text-modal .text-modal-body").offset().top});
	}
});

$(".widget-body-content, #text-modal").on("click", ".go-dark", function(){
	$("html").css("--stud-gray", "#1f1f1f");
	$("html").css("--stud-letter", "#666");
	$("html").css("--stud-red", "#a21025");
	$("html").css("--ann-c", "#333");
	$("html").css("--ann-c-h", "#555");
	$("html").css("--ann-txt", "#aaa");
	$(this).removeClass("go-dark");
	$(this).addClass("go-light");
});

$(".widget-body-content, #text-modal").on("click", ".go-light", function(){
	$("html").css("--stud-gray", "#ccc");
	$("html").css("--stud-letter", "#1f1f1f");
	$("html").css("--stud-red");
	$("html").css("--ann-c", "#999");
	$("html").css("--ann-c-h", "#878787");
	$("html").css("--ann-txt", "#fff");
	$(this).removeClass("go-light");
	$(this).addClass("go-dark");
});

$("window").resize(function(){
	if ($(".widget").hasClass("expanded") && (document.documentElement.clientWidth < 768)){
		$(".widget").addClass("collapsed");
		$(".widget").removeClass("expanded");
		$(".widget-body-content").hide();
	}
});
