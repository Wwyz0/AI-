document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.getElementById('excel-file-input');
    const textInput = document.querySelector('.file-upload input[type="text"]');
    const openDictionaryButton = document.getElementById('open-custom-dictionary');
    const modal = document.getElementById('customDictionaryModal');
    const closeButton = document.querySelector('.close-button');
    const copyButton = document.getElementById('copy-button');
    const resetButton = document.getElementById('reset-button');
    const promptResultBox = document.getElementById('prompt-result');
    const dynamicButtonsContainer = document.getElementById('dynamic-buttons-container');
    const imageButtonGridsContainer = document.getElementById('image-button-grids-container');

    // 显示弹窗的功能
    openDictionaryButton.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    // 关闭弹窗的功能
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    fileInput.addEventListener('change', function(event) {
        const fileName = event.target.files[0]?.name || '未选择文件';
        textInput.value = fileName;

        // 处理文件上传
        handleFileUpload(event.target.files[0]);
    });

    // 处理文件上传和解析
    function handleFileUpload(file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });

            // 假设我们处理第一个工作表
            const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
            const jsonData = XLSX.utils.sheet_to_json(firstSheet);

            processExcelData(jsonData);

            // 上传成功后显示提示并关闭弹窗
            showCustomTooltip('上传成功！');
            setTimeout(function() {
                modal.style.display = 'none';
            }, 1000); // 延迟关闭弹窗，确保用户看到提示
        };
        reader.readAsArrayBuffer(file);
    }

    // 为每个分类生成默认的图文混排按钮
     predefinedCategories
         ['figure'] ：[
    { cnText: '女性', enText: 'female', imgSrc: 'https://github.com/Wwyz0/AIGC-Prompt/blob/main/%E6%9C%AA%E6%A0%87%E9%A2%98-1_%E7%94%BB%E6%9D%BF%201.jpg' },
    { cnText: '双胞胎', enText: 'twins', imgSrc: 'https://github.com/Wwyz0/AIGC-Prompt/blob/main/%E6%9C%AA%E6%A0%87%E9%A2%98-1_%E7%94%BB%E6%9D%BF%201.jpg' },
    { cnText: '学生', enText: 'student', imgSrc: 'https://github.com/Wwyz0/AIGC-Prompt/blob/main/%E6%9C%AA%E6%A0%87%E9%A2%98-1_%E7%94%BB%E6%9D%BF%201.jpg' },
    { cnText: '女王', enText: 'queen', imgSrc: 'https://github.com/Wwyz0/AIGC-Prompt/blob/main/%E6%9C%AA%E6%A0%87%E9%A2%98-1_%E7%94%BB%E6%9D%BF%201.jpg' },
    { cnText: '萝莉', enText: 'loli', imgSrc: 'https://github.com/Wwyz0/AIGC-Prompt/blob/main/%E6%9C%AA%E6%A0%87%E9%A2%98-1_%E7%94%BB%E6%9D%BF%201.jpg' },
    { cnText: '美少女', enText: 'bishoujo', imgSrc: 'https://github.com/Wwyz0/AIGC-Prompt/blob/main/%E6%9C%AA%E6%A0%87%E9%A2%98-1_%E7%94%BB%E6%9D%BF%201.jpg' },
    { cnText: '辣妹', enText: 'gyaru', imgSrc: 'https://github.com/Wwyz0/AIGC-Prompt/blob/main/%E6%9C%AA%E6%A0%87%E9%A2%98-1_%E7%94%BB%E6%9D%BF%201.jpg' },
    { cnText: '女神', enText: 'goddess', imgSrc: 'https://github.com/Wwyz0/AIGC-Prompt/blob/main/%E6%9C%AA%E6%A0%87%E9%A2%98-1_%E7%94%BB%E6%9D%BF%201.jpg' },
    { cnText: '公主', enText: 'princess', imgSrc: 'images/princess.jpg' },
    { cnText: '天使', enText: 'angel', imgSrc: 'https://github.com/Wwyz0/AIGC-Prompt/blob/main/%E6%9C%AA%E6%A0%87%E9%A2%98-1_%E7%94%BB%E6%9D%BF%201.jpg' },
    { cnText: '人偶', enText: 'doll', imgSrc: 'https://github.com/Wwyz0/AIGC-Prompt/blob/main/%E6%9C%AA%E6%A0%87%E9%A2%98-1_%E7%94%BB%E6%9D%BF%201.jpg' },
    { cnText: '小精灵', enText: 'fairy', imgSrc: https://github.com/Wwyz0/AIGC-Prompt/blob/main/%E6%9C%AA%E6%A0%87%E9%A2%98-1_%E7%94%BB%E6%9D%BF%201.jpg' },
    { cnText: '恶魔', enText: 'devil', imgSrc: 'https://github.com/Wwyz0/AIGC-Prompt/blob/main/%E6%9C%AA%E6%A0%87%E9%A2%98-1_%E7%94%BB%E6%9D%BF%201.jpg' },
    { cnText: '吸血鬼', enText: 'vampire', imgSrc: 'https://github.com/Wwyz0/AIGC-Prompt/blob/main/%E6%9C%AA%E6%A0%87%E9%A2%98-1_%E7%94%BB%E6%9D%BF%201.jpg' },
    { cnText: '精灵', enText: 'elf', imgSrc: 'https://github.com/Wwyz0/AIGC-Prompt/blob/main/%E6%9C%AA%E6%A0%87%E9%A2%98-1_%E7%94%BB%E6%9D%BF%201.jpg' },
    { cnText: '美人鱼', enText: 'mermaid', imgSrc: 'https://github.com/Wwyz0/AIGC-Prompt/blob/main/%E6%9C%AA%E6%A0%87%E9%A2%98-1_%E7%94%BB%E6%9D%BF%201.jpg' },
    { cnText: '海盗', enText: 'pirate', imgSrc: 'https://github.com/Wwyz0/AIGC-Prompt/blob/main/%E6%9C%AA%E6%A0%87%E9%A2%98-1_%E7%94%BB%E6%9D%BF%201.jpg' },
    { cnText: '狼人', enText: 'werewolf', imgSrc: 'https://github.com/Wwyz0/AIGC-Prompt/blob/main/%E6%9C%AA%E6%A0%87%E9%A2%98-1_%E7%94%BB%E6%9D%BF%201.jpg' },
    { cnText: '女巫', enText: 'witch', imgSrc: 'https://github.com/Wwyz0/AIGC-Prompt/blob/main/%E6%9C%AA%E6%A0%87%E9%A2%98-1_%E7%94%BB%E6%9D%BF%201.jpg' },
    { cnText: '机器人', enText: 'robot', imgSrc: 'https://github.com/Wwyz0/AIGC-Prompt/blob/main/%E6%9C%AA%E6%A0%87%E9%A2%98-1_%E7%94%BB%E6%9D%BF%201.jpg' },
    { cnText: '怪物', enText: 'monster', imgSrc: 'https://github.com/Wwyz0/AIGC-Prompt/blob/main/%E6%9C%AA%E6%A0%87%E9%A2%98-1_%E7%94%BB%E6%9D%BF%201.jpg' },
    { cnText: '婴儿', enText: 'baby', imgSrc: 'https://github.com/Wwyz0/AIGC-Prompt/blob/main/%E6%9C%AA%E6%A0%87%E9%A2%98-1_%E7%94%BB%E6%9D%BF%201.jpg' },
    { cnText: '忍者', enText: 'ninja', imgSrc: 'https://github.com/Wwyz0/AIGC-Prompt/blob/main/%E6%9C%AA%E6%A0%87%E9%A2%98-1_%E7%94%BB%E6%9D%BF%201.jpg' },
    { cnText: '幽灵', enText: 'ghost', imgSrc: 'https://github.com/Wwyz0/AIGC-Prompt/blob/main/%E6%9C%AA%E6%A0%87%E9%A2%98-1_%E7%94%BB%E6%9D%BF%201.jpg' },
    { cnText: '孩子', enText: 'kid', imgSrc: 'https://github.com/Wwyz0/AIGC-Prompt/blob/main/%E6%9C%AA%E6%A0%87%E9%A2%98-1_%E7%94%BB%E6%9D%BF%201.jpg' },
    { cnText: '青少年', enText: 'teen', imgSrc: 'https://github.com/Wwyz0/AIGC-Prompt/blob/main/%E6%9C%AA%E6%A0%87%E9%A2%98-1_%E7%94%BB%E6%9D%BF%201.jpg' },
    { cnText: '警察', enText: 'police', imgSrc: 'https://github.com/Wwyz0/AIGC-Prompt/blob/main/%E6%9C%AA%E6%A0%87%E9%A2%98-1_%E7%94%BB%E6%9D%BF%201.jpg' },
    { cnText: '宇航员', enText: 'astronaut', imgSrc: 'https://github.com/Wwyz0/AIGC-Prompt/blob/main/%E6%9C%AA%E6%A0%87%E9%A2%98-1_%E7%94%BB%E6%9D%BF%201.jpg' },
    { cnText: '修女', enText: 'nun', imgSrc: 'https://github.com/Wwyz0/AIGC-Prompt/blob/main/%E6%9C%AA%E6%A0%87%E9%A2%98-1_%E7%94%BB%E6%9D%BF%201.jpg' },
    { cnText: '外星人', enText: 'alien', imgSrc: 'https://github.com/Wwyz0/AIGC-Prompt/blob/main/%E6%9C%AA%E6%A0%87%E9%A2%98-1_%E7%94%BB%E6%9D%BF%201.jpg' },
    { cnText: '超级英雄', enText: 'superhero', imgSrc: 'https://github.com/Wwyz0/AIGC-Prompt/blob/main/%E6%9C%AA%E6%A0%87%E9%A2%98-1_%E7%94%BB%E6%9D%BF%201.jpg' },
    { cnText: '龙女', enText: 'dragon_lady', imgSrc: 'https://github.com/Wwyz0/AIGC-Prompt/blob/main/%E6%9C%AA%E6%A0%87%E9%A2%98-1_%E7%94%BB%E6%9D%BF%201.jpg' },
    { cnText: '僵尸', enText: 'zombie', imgSrc: 'https://github.com/Wwyz0/AIGC-Prompt/blob/main/%E6%9C%AA%E6%A0%87%E9%A2%98-1_%E7%94%BB%E6%9D%BF%201.jpg' },
];
        'official-params': [
            { cnText: '参数1', enText: 'Param1' },
            { cnText: '参数2', enText: 'Param2' },
            { cnText: '参数3', enText: 'Param3' }
            { cnText: '', enText: '' }
            { cnText: '', enText: '' }
            { cnText: '', enText: '' }
            { cnText: '', enText: '' }
            { cnText: '', enText: '' }
            { cnText: '', enText: '' }
            { cnText: '', enText: '' }
            { cnText: '', enText: '' }
        ],
        'lighting': [
            { cnText: '照明1', enText: 'Lighting1' },
            { cnText: '照明2', enText: 'Lighting2' },
            { cnText: '照明3', enText: 'Lighting3' }
            { cnText: '', enText: '' }
            { cnText: '', enText: '' }
            { cnText: '', enText: '' }
            { cnText: '', enText: '' }
            { cnText: '', enText: '' }
            { cnText: '', enText: '' }
            { cnText: '', enText: '' }
            { cnText: '', enText: '' }
        ],
        'composition': [
            { cnText: '构图1', enText: 'Composition1' },
            { cnText: '构图2', enText: 'Composition2' },
            { cnText: '构图3', enText: 'Composition3' }
            { cnText: '', enText: '' }
            { cnText: '', enText: '' }
            { cnText: '', enText: '' }
            { cnText: '', enText: '' }
            { cnText: '', enText: '' }
            { cnText: '', enText: '' }
            { cnText: '', enText: '' }
            { cnText: '', enText: '' }
        ],
        'environment': [
            { cnText: '环境1', enText: 'Environment1' },
            { cnText: '环境2', enText: 'Environment2' },
            { cnText: '环境3', enText: 'Environment3' }
            { cnText: '', enText: '' }
            { cnText: '', enText: '' }
            { cnText: '', enText: '' }
            { cnText: '', enText: '' }
            { cnText: '', enText: '' }
            { cnText: '', enText: '' }
            { cnText: '', enText: '' }
            { cnText: '', enText: '' }
        ],
        'style': [
            { cnText: '风格1', enText: 'Style1' },
            { cnText: '风格2', enText: 'Style2' },
            { cnText: '风格3', enText: 'Style3' }
            { cnText: '', enText: '' }
            { cnText: '', enText: '' }
            { cnText: '', enText: '' }
            { cnText: '', enText: '' }
            { cnText: '', enText: '' }
            { cnText: '', enText: '' }
            { cnText: '', enText: '' }
            { cnText: '', enText: '' }
        ]
    };

    // 生成动态按钮和图文混排内容
    Object.keys(predefinedCategories).forEach(category => {
        const button = document.getElementById(category);
        const grid = document.getElementById(`image-buttons-${category}`);

        predefinedCategories[category].forEach(item => {
            const imageButton = document.createElement('button');
            imageButton.className = 'image-button';
            imageButton.dataset.en = item.enText;

            const span = document.createElement('span');
            span.className = 'image-button-text';
            span.textContent = `${item.cnText} ${item.enText}`;

            imageButton.appendChild(span);

            imageButton.addEventListener('click', function() {
                this.classList.toggle('selected');

                const enText = this.getAttribute('data-en');
                if (this.classList.contains('selected')) {
                    promptResultBox.value += enText + " ";
                } else {
                    const regex = new RegExp(enText + " ", 'g');
                    promptResultBox.value = promptResultBox.value.replace(regex, '');
                }
            });

            grid.appendChild(imageButton);
        });

        button.addEventListener('click', function() {
            // 清除其他按钮的选中状态
            document.querySelectorAll('.button-set-item').forEach(btn => btn.classList.remove('selected'));
            this.classList.add('selected');

            // 隐藏所有图文混排按钮容器
            document.querySelectorAll('.image-button-grid').forEach(g => g.style.display = 'none');

            // 显示当前分类对应的图文混排按钮容器
            grid.style.display = 'grid';
        });
    });

    // 处理 Excel 数据并生成页面元素
    function processExcelData(data) {
        const categories = {};

        data.forEach(row => {
            const category = row['分类'];
            const cnText = row['中文'];
            const enText = row['英文'];

            if (!categories[category]) {
                categories[category] = [];
            }
            categories[category].push({ cnText, enText });
        });

        // 为每个分类生成按钮和图文混排内容
        Object.keys(categories).forEach(category => {
            // 动态页面交互按钮
            if (!document.getElementById(`button-${category}`)) {
                const button = document.createElement('button');
                button.className = 'button-set-item';
                button.id = `button-${category}`;
                button.textContent = category;

                dynamicButtonsContainer.querySelector('.button-set').appendChild(button);

                const grid = document.createElement('div');
                grid.className = 'image-button-grid';
                grid.id = `image-buttons-${category}`;
                grid.style.display = 'none';

                imageButtonGridsContainer.appendChild(grid);

                button.addEventListener('click', function() {
                    // 清除其他按钮的选中状态
                    document.querySelectorAll('.button-set-item').forEach(btn => btn.classList.remove('selected'));
                    this.classList.add('selected');

                    // 隐藏所有图文混排按钮容器
                    document.querySelectorAll('.image-button-grid').forEach(g => g.style.display = 'none');

                    // 显示当前分类对应的图文混排按钮容器
                    grid.style.display = 'grid';
                });
            }

            const grid = document.getElementById(`image-buttons-${category}`);
            categories[category].forEach(item => {
                const imageButton = document.createElement('button');
                imageButton.className = 'image-button';
                imageButton.dataset.en = item.enText;

                const span = document.createElement('span');
                span.className = 'image-button-text';
                span.textContent = `${item.cnText} ${item.enText}`;

                imageButton.appendChild(span);

                imageButton.addEventListener('click', function() {
                    this.classList.toggle('selected');

                    const enText = this.getAttribute('data-en');
                    if (this.classList.contains('selected')) {
                        promptResultBox.value += enText + " ";
                    } else {
                        const regex = new RegExp(enText + " ", 'g');
                        promptResultBox.value = promptResultBox.value.replace(regex, '');
                    }
                });

                grid.appendChild(imageButton);
            });
        });
    }

    // 处理复制按钮功能
    copyButton.addEventListener('click', function() {
        promptResultBox.select();
        document.execCommand('copy');
        
        // 显示自定义浮动提示框
        showCustomTooltip('复制成功！');
    });

    // 处理重置按钮功能
    resetButton.addEventListener('click', function() {
        promptResultBox.value = '';
        document.querySelectorAll('.image-button.selected').forEach(button => button.classList.remove('selected'));
    });

    // 自定义浮动提示框的功能
    function showCustomTooltip(message) {
        // 创建提示框元素
        const tooltip = document.createElement('div');
        tooltip.className = 'custom-tooltip';
        tooltip.innerHTML = `<span class="tooltip-icon">✔</span> ${message}`;
        
        // 添加到页面中
        document.body.appendChild(tooltip);
        
        // 设置定时器，3秒后移除提示框
        setTimeout(function() {
            tooltip.remove();
        }, 3000);
    }
});
