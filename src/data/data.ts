// data fake
interface LearningData {
    name: string;
    id?: number;
    target: string;
    data: [   // số lượng từ sẽ là data.length

        {
            id: number;
            word: string;
            type: string;
            urlVideo: string;
        },
    ];
}

interface ReviseData {
    name: string;
    id?: number;
    target: string;
    data: [
        {
            id: number;
            word: string;
            type: string;
            urlVideo: string;
            question: string;
            answer: {
                answerA: string,
                answerB: string,
                answerC: string,
                answerD: string,
            },
            correctAnswer: string
        },
    ];
}

interface UserStudyData {
    userID: number; 
    name: string;
    timeStudied: number[]; // Số giờ đã học theo các ngày trong tuần (T2 -> CN)
    wordStudiedPerDay: number[]; // Số chữ đã học theo từng ngày
    wordStudiedPerCategory: number[]; // Số chữ đã học theo các danh mục
    totalWordStudied: number; // Tổng số chữ đã học
  }

export const userData: UserStudyData[] = [
    {
        userID: 1,
        name: 'Khai',
        timeStudied: [1, 3, 5, 2, 1, 4, 3],
        wordStudiedPerDay: [2, 4, 0, 1, 5, 5, 2],
        wordStudiedPerCategory: [7, 4, 2, 4, 6, 4, 2],
        totalWordStudied: 29,
    },
    {
        userID: 2,
        name: "Hien",
        timeStudied: [2, 1, 4, 3, 2, 5, 6],
        wordStudiedPerDay: [5, 3, 2, 4, 1, 7, 8],
        wordStudiedPerCategory: [6, 5, 3, 7, 4, 3, 5],
        totalWordStudied: 33,
      },
      {
        userID: 3,
        name: "Duc",
        timeStudied: [0, 2, 3, 5, 2, 1, 4],
        wordStudiedPerDay: [3, 2, 5, 6, 3, 4, 7],
        wordStudiedPerCategory: [5, 4, 6, 3, 7, 2, 1],
        totalWordStudied: 28,
      },
      {
        userID: 4,
        name: "Son",
        timeStudied: [3, 4, 1, 2, 5, 3, 2],
        wordStudiedPerDay: [4, 3, 6, 1, 2, 5, 4],
        wordStudiedPerCategory: [8, 6, 5, 7, 3, 2, 4],
        totalWordStudied: 35,
      },
      {
        userID: 5,
        name: "Suc",
        timeStudied: [3, 4, 1, 2, 5, 3, 2],
        wordStudiedPerDay: [4, 3, 6, 1, 2, 5, 4],
        wordStudiedPerCategory: [3, 6, 2, 4, 3, 2, 4],
        totalWordStudied: 24,
      },{
        userID: 6,
        name: "Hai",
        timeStudied: [3, 4, 1, 2, 5, 3, 2],
        wordStudiedPerDay: [4, 3, 6, 1, 2, 5, 4],
        wordStudiedPerCategory: [3, 2, 1, 3, 4, 2, 1],
        totalWordStudied: 16,
      },
]

const LearningData_vn_example = [
    {
        name: 'Màu sắc',
        id: 1,
        target: 'Stude',
        data: [
            {
                id: 1,
                word: 'màu xanh da trời',
                url: 'https://qipedc.moet.gov.vn/videos/W02142B.mp4',
                type: 'danh từ'
            },
        ]
    },
    {}
]


export const LearningData_vn = [
    {
        name: 'Màu sắc',
        id: 1,
        target: 'Study',
        data: [
            { id: 1, word: 'màu xanh da trời', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W02142B.mp4' },
            { id: 2, word: 'màu xanh lá cây', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W02143B.mp4' },
            { id: 3, word: 'màu trắng', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W02140B.mp4' },
            { id: 4, word: 'màu đỏ', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W02134.mp4' },
            { id: 5, word: 'màu nâu', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W02137B.mp4' },
            { id: 6, word: 'màu cam', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W02132.mp4' },
            { id: 7, word: 'màu đen', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W02133B.mp4' }
        ]
    },
    {
        name: 'Trái cây',
        id: 2,
        target: 'Study',
        data: [
            {
                id: 11,
                word: 'quả chuối',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W02730.mp4'
            },
            {
                id: 12,
                word: 'quả chanh',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W02728.mp4'
            },
            {
                id: 13,
                word: 'quả nho',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W02749.mp4'
            },
            {
                id: 14,
                word: 'quả lê',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W02744.mp4'
            },
            {
                id: 15,
                word: 'quả táo',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W02757B.mp4'
            }
        ]
    },
    {
        name: 'Thức ăn',
        id: 3,
        target: 'Study',
        data: [
            { id: 16, word: 'pizza', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W00140.mp4' },
            { id: 17, word: 'hộp sữa', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W01704.mp4' },
            { id: 18, word: 'hamburger', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/D0391.mp4' },
            { id: 19, word: 'trứng', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W03659B.mp4' },
            { id: 20, word: 'kẹo', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W01743B.mp4' }
        ]
    },
    {
        name: 'Công việc',
        id: 4,
        target: 'Study',
        data: [
            { id: 21, word: 'nhân viên', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/D0004.mp4' },
            { id: 22, word: 'nghệ sĩ', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W02356.mp4' },
            { id: 23, word: 'kiến trúc sư', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W01887.mp4' },
            { id: 25, word: 'đạo diễn', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/D0093.mp4' }
        ]
    },
    {
        name: 'Động vật',
        id: 5,
        target: 'Study',
        data: [
            { id: 26, word: 'con mèo', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W00772B.mp4' },
            { id: 27, word: 'con chó', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W00739B.mp4' },
            { id: 28, word: 'con chim', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W00738.mp4' },
            { id: 29, word: 'con ngựa', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W00778B.mp4' },
            { id: 30, word: 'con bò', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W00735B.mp4' },
            { id: 31, word: 'con cừu', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W00751.mp4' },
            { id: 32, word: 'con lợn', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W00770B.mp4' },
            { id: 33, word: 'sâu bọ, côn trùng', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W02944.mp4' }
        ]
    },
    {
        name: 'Thời gian',
        id: 6,
        target: 'Study',
        data: [
            { id: 34, word: 'ban ngày', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W00089.mp4' },
            { id: 35, word: 'ban đêm', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W00086B.mp4' },
            { id: 36, word: 'tuần', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W03685B.mp4' },
            { id: 37, word: 'tháng', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W03167B.mp4' },
            { id: 38, word: 'tương lai', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/D0288.mp4' },
            { id: 39, word: 'mùa xuân', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W02272B.mp4' },
            { id: 40, word: 'mùa hạ', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W02270B.mp4' },
            { id: 41, word: 'mùa thu', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W02271.mp4' },
            { id: 42, word: 'mùa đông', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W02269.mp4' }
        ]
    },
    {
        name: 'Gia đình',
        id: 7,
        target: 'Study',
        data: [
            { id: 43, word: 'mẹ', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W02110.mp4' },
            { id: 44, word: 'bố', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W00325.mp4' },
            { id: 45, word: 'chú', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W00506.mp4' }
        ]
    }
]
export const ReviseData_vn = [
    {
        name: 'Màu sắc',
        id: 1,
        target: 'Revise',
        data: [
            {
                id: 1,
                word: 'màu xanh da trời',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W02142B.mp4',
                question: 'Đây là màu sắc nào"?',
                answer: {
                    answerA: 'màu xanh lá cây',
                    answerB: 'màu đỏ',
                    answerC: 'màu trắng',
                    answerD: 'màu xanh da trời'
                },
                correctAnswer: 'màu xanh da trời'
            },
            {
                id: 2,
                word: 'màu xanh lá cây',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W02143B.mp4',
                question: 'Đây là màu sắc nào"?',
                answer: {
                    answerA: 'màu xanh lá cây',
                    answerB: 'màu đen',
                    answerC: 'màu cam',
                    answerD: 'màu nâu'
                },
                correctAnswer: 'màu xanh lá cây'
            },
            {
                id: 3,
                word: 'màu trắng',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W02140B.mp4',
                question: 'Đây là màu sắc nào"?',
                answer: {
                    answerA: 'màu đỏ',
                    answerB: 'màu cam',
                    answerC: 'màu trắng',
                    answerD: 'màu đen'
                },
                correctAnswer: 'màu trắng'
            },
            {
                id: 4,
                word: 'màu đỏ',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W02134.mp4',
                question: 'Đây là màu sắc nào"?',
                answer: {
                    answerA: 'màu đỏ',
                    answerB: 'màu xanh lá cây',
                    answerC: 'màu trắng',
                    answerD: 'màu nâu'
                },
                correctAnswer: 'màu đỏ'
            },
            {
                id: 5,
                word: 'màu nâu',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W02137B.mp4',
                question: 'Đây là màu sắc nào"?',
                answer: {
                    answerA: 'màu đen',
                    answerB: 'màu nâu',
                    answerC: 'màu xanh da trời',
                    answerD: 'màu cam'
                },
                correctAnswer: 'màu nâu'
            },
            {
                id: 6,
                word: 'màu cam',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W02132.mp4',
                question: 'Đây là màu sắc nào"?',
                answer: {
                    answerA: 'màu cam',
                    answerB: 'màu đỏ',
                    answerC: 'màu trắng',
                    answerD: 'màu xanh lá cây'
                },
                correctAnswer: 'màu cam'
            },
            {
                id: 7,
                word: 'màu đen',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W02133B.mp4',
                question: 'Đây là màu sắc nào"?',
                answer: {
                    answerA: 'màu đen',
                    answerB: 'màu trắng',
                    answerC: 'màu đỏ',
                    answerD: 'màu cam'
                },
                correctAnswer: 'màu đen'
            }
        ]
    },
    {
        name: 'Trái cây',
        id: 2,
        target: 'Revise',
        data: [
            {
                id: 11,
                word: 'quả chuối',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W02730.mp4',
                question: 'Đây là loại trái cây nào?',
                answer: {
                    answerA: 'quả táo',
                    answerB: 'quả chuối',
                    answerC: 'quả nho',
                    answerD: 'quả lê'
                },
                correctAnswer: 'quả chuối'
            },
            {
                id: 12,
                word: 'quả chanh',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W02728.mp4',
                question: 'Đây là loại trái cây nào?',
                answer: {
                    answerA: 'quả táo',
                    answerB: 'quả lê',
                    answerC: 'quả chanh',
                    answerD: 'quả nho'
                },
                correctAnswer: 'quả chanh'
            },
            {
                id: 13,
                word: 'quả nho',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W02749.mp4',
                question: 'Đây là loại trái cây nào?',
                answer: {
                    answerA: 'quả chuối',
                    answerB: 'quả nho',
                    answerC: 'quả táo',
                    answerD: 'quả chanh'
                },
                correctAnswer: 'quả nho'
            },
            {
                id: 14,
                word: 'quả lê',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W02744.mp4',
                question: 'Đây là loại trái cây nào?',
                answer: {
                    answerA: 'quả lê',
                    answerB: 'quả táo',
                    answerC: 'quả nho',
                    answerD: 'quả chanh'
                },
                correctAnswer: 'quả lê'
            },
            {
                id: 15,
                word: 'quả táo',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W02757B.mp4',
                question: 'Đây là loại trái cây nào?',
                answer: {
                    answerA: 'quả táo',
                    answerB: 'quả nho',
                    answerC: 'quả chuối',
                    answerD: 'quả chanh'
                },
                correctAnswer: 'quả táo'
            }
        ]
    },
    {
        name: 'Thức ăn',
        id: 3,
        target: 'Revise',
        data: [
            {
                id: 19,
                word: 'trứng',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W03659B.mp4',
                question: 'Đây là loại đồ ăn nào?',
                answer: {
                    answerA: 'trứng',
                    answerB: 'pizza',
                    answerC: 'hamburger',
                    answerD: 'kẹo'
                },
                correctAnswer: 'trứng'
            },
            {
                id: 20,
                word: 'kẹo',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W01743B.mp4',
                question: 'Đây là loại đồ ăn nào?',
                answer: {
                    answerA: 'pizza',
                    answerB: 'trứng',
                    answerC: 'hamburger',
                    answerD: 'kẹo'
                },
                correctAnswer: 'kẹo'
            }
        ]
    },
    {
        name: 'Công việc',
        id: 4,
        target: 'Revise',
        data: [
            {
                id: 21,
                word: 'nhân viên',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/D0004.mp4',
                question: 'Công việc nào có tên gọi là "nhân viên"?',
                answer: {
                    answerA: 'nghệ sĩ',
                    answerB: 'kiến trúc sư',
                    answerC: 'nhân viên',
                    answerD: 'đạo diễn'
                },
                correctAnswer: 'nhân viên'
            },
            {
                id: 22,
                word: 'nghệ sĩ',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W02356.mp4',
                question: 'Công việc nào có tên gọi là "nghệ sĩ"?',
                answer: {
                    answerA: 'đạo diễn',
                    answerB: 'nghệ sĩ',
                    answerC: 'kiến trúc sư',
                    answerD: 'nhân viên'
                },
                correctAnswer: 'nghệ sĩ'
            },
            {
                id: 23,
                word: 'kiến trúc sư',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W01887.mp4',
                question: 'Công việc nào có tên gọi là "kiến trúc sư"?',
                answer: {
                    answerA: 'đạo diễn',
                    answerB: 'nghệ sĩ',
                    answerC: 'kiến trúc sư',
                    answerD: 'nhân viên'
                },
                correctAnswer: 'kiến trúc sư'
            },
            {
                id: 25,
                word: 'đạo diễn',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/D0093.mp4',
                question: 'Công việc nào có tên gọi là "đạo diễn"?',
                answer: {
                    answerA: 'đạo diễn',
                    answerB: 'nghệ sĩ',
                    answerC: 'kiến trúc sư',
                    answerD: 'nhân viên'
                },
                correctAnswer: 'đạo diễn'
            }
        ]
    },
    {
        name: 'Động vật',
        id: 5,
        target: 'StuRevisedy',
        data: [
            {
                id: 26,
                word: 'con mèo',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W00772B.mp4',
                question: 'Con vật nào có tên gọi là "con mèo"?',
                answer: {
                    answerA: 'con chó',
                    answerB: 'con mèo',
                    answerC: 'con chim',
                    answerD: 'con bò'
                },
                correctAnswer: 'con mèo'
            },
            {
                id: 27,
                word: 'con chó',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W00739B.mp4',
                question: 'Con vật nào có tên gọi là "con chó"?',
                answer: {
                    answerA: 'con mèo',
                    answerB: 'con chim',
                    answerC: 'con chó',
                    answerD: 'con lợn'
                },
                correctAnswer: 'con chó'
            },
            {
                id: 28,
                word: 'con chim',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W00738.mp4',
                question: 'Con vật nào có tên gọi là "con chim"?',
                answer: {
                    answerA: 'con bò',
                    answerB: 'con lợn',
                    answerC: 'con ngựa',
                    answerD: 'con chim'
                },
                correctAnswer: 'con chim'
            },
            {
                id: 29,
                word: 'con ngựa',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W00778B.mp4',
                question: 'Con vật nào có tên gọi là "con ngựa"?',
                answer: {
                    answerA: 'con ngựa',
                    answerB: 'con cừu',
                    answerC: 'con bò',
                    answerD: 'con lợn'
                },
                correctAnswer: 'con ngựa'
            },
            {
                id: 30,
                word: 'con bò',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W00735B.mp4',
                question: 'Con vật nào có tên gọi là "con bò"?',
                answer: {
                    answerA: 'con lợn',
                    answerB: 'con bò',
                    answerC: 'con cừu',
                    answerD: 'con ngựa'
                },
                correctAnswer: 'con bò'
            },
            {
                id: 31,
                word: 'con cừu',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W00751.mp4',
                question: 'Con vật nào có tên gọi là "con cừu"?',
                answer: {
                    answerA: 'con cừu',
                    answerB: 'con ngựa',
                    answerC: 'con lợn',
                    answerD: 'con bò'
                },
                correctAnswer: 'con cừu'
            },
            {
                id: 32,
                word: 'con lợn',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W00770B.mp4',
                question: 'Con vật nào có tên gọi là "con lợn"?',
                answer: {
                    answerA: 'con cừu',
                    answerB: 'con lợn',
                    answerC: 'con bò',
                    answerD: 'con ngựa'
                },
                correctAnswer: 'con lợn'
            },
            {
                id: 33,
                word: 'sâu bọ, côn trùng',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W02944.mp4',
                question: 'Loài nào có tên gọi là "sâu bọ, côn trùng"?',
                answer: {
                    answerA: 'con cừu',
                    answerB: 'con ngựa',
                    answerC: 'sâu bọ, côn trùng',
                    answerD: 'con bò'
                },
                correctAnswer: 'sâu bọ, côn trùng'
            }
        ]
    },
    {
        name: 'Thời gian',
        id: 6,
        target: 'Study',
        data: [
            {
                id: 34,
                word: 'ban ngày',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W00089.mp4',
                question: 'Thời gian nào có tên gọi là "ban ngày"?',
                answer: {
                    answerA: 'ban đêm',
                    answerB: 'ban ngày',
                    answerC: 'mùa hạ',
                    answerD: 'mùa xuân'
                },
                correctAnswer: 'ban ngày'
            },
            {
                id: 35,
                word: 'ban đêm',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W00086B.mp4',
                question: 'Thời gian nào có tên gọi là "ban đêm"?',
                answer: {
                    answerA: 'ban ngày',
                    answerB: 'mùa đông',
                    answerC: 'ban đêm',
                    answerD: 'mùa thu'
                },
                correctAnswer: 'ban đêm'
            },
            {
                id: 36,
                word: 'tuần',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W03685B.mp4',
                question: 'Đơn vị thời gian nào có tên gọi là "tuần"?',
                answer: {
                    answerA: 'tháng',
                    answerB: 'tuần',
                    answerC: 'ngày',
                    answerD: 'giờ'
                },
                correctAnswer: 'tuần'
            },
            {
                id: 37,
                word: 'tháng',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W03167B.mp4',
                question: 'Đơn vị thời gian nào có tên gọi là "tháng"?',
                answer: {
                    answerA: 'tuần',
                    answerB: 'tháng',
                    answerC: 'năm',
                    answerD: 'giây'
                },
                correctAnswer: 'tháng'
            },
            {
                id: 38,
                word: 'tương lai',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/D0288.mp4',
                question: 'Thuộc về thời gian nào?',
                answer: {
                    answerA: 'quá khứ',
                    answerB: 'hiện tại',
                    answerC: 'tương lai',
                    answerD: 'ngày'
                },
                correctAnswer: 'tương lai'
            },
            {
                id: 39,
                word: 'mùa xuân',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W02272B.mp4',
                question: 'Mùa nào có tên gọi là "mùa xuân"?',
                answer: {
                    answerA: 'mùa thu',
                    answerB: 'mùa xuân',
                    answerC: 'mùa hạ',
                    answerD: 'mùa đông'
                },
                correctAnswer: 'mùa xuân'
            },
            {
                id: 40,
                word: 'mùa hạ',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W02270B.mp4',
                question: 'Mùa nào có tên gọi là "mùa hạ"?',
                answer: {
                    answerA: 'mùa đông',
                    answerB: 'mùa xuân',
                    answerC: 'mùa hạ',
                    answerD: 'mùa thu'
                },
                correctAnswer: 'mùa hạ'
            },
            {
                id: 41,
                word: 'mùa thu',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W02271.mp4',
                question: 'Mùa nào có tên gọi là "mùa thu"?',
                answer: {
                    answerA: 'mùa thu',
                    answerB: 'mùa xuân',
                    answerC: 'mùa hạ',
                    answerD: 'mùa đông'
                },
                correctAnswer: 'mùa thu'
            },
            {
                id: 42,
                word: 'mùa đông',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W02269.mp4',
                question: 'Mùa nào có tên gọi là "mùa đông"?',
                answer: {
                    answerA: 'mùa đông',
                    answerB: 'mùa xuân',
                    answerC: 'mùa hạ',
                    answerD: 'mùa thu'
                },
                correctAnswer: 'mùa đông'
            }
        ]
    },
    {
        name: 'Gia đình',
        id: 7,
        target: 'Revise',
        data: [
            {
                id: 43,
                word: 'mẹ',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W02110.mp4',
                question: 'Ai là người mẹ?',
                answer: {
                    answerA: 'bố',
                    answerB: 'chú',
                    answerC: 'mẹ',
                    answerD: 'anh'
                },
                correctAnswer: 'mẹ'
            },
            {
                id: 44,
                word: 'bố',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W00325.mp4',
                question: 'Ai là người bố?',
                answer: {
                    answerA: 'chú',
                    answerB: 'bố',
                    answerC: 'anh',
                    answerD: 'mẹ'
                },
                correctAnswer: 'bố'
            },
            {
                id: 45,
                word: 'chú',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W00506.mp4',
                question: 'Ai là người chú?',
                answer: {
                    answerA: 'bố',
                    answerB: 'chú',
                    answerC: 'anh',
                    answerD: 'mẹ'
                },
                correctAnswer: 'chú'
            }
        ]
    }

]


const LearningData_en = [
    {
        name: 'Màu sắc',
        id: 1,
        target: 'Study',
        data: [
            { id: 1, word: 'màu xanh da trời', url: 'https://youtu.be/t2T1_LMVTp8', type: 'danh từ' },
            { id: 2, word: 'màu xanh lá cây', url: 'https://youtu.be/WrkXE5l6udM', type: 'danh từ' },
            { id: 3, word: 'màu trắng', url: 'https://youtu.be/uLjkLwFvFtw', type: 'danh từ' },
            { id: 4, word: 'màu đỏ', url: 'https://youtu.be/lDBvf8SoQuc', type: 'danh từ' },
            { id: 5, word: 'màu nâu', url: 'https://youtu.be/HGBcts4shKw', type: 'danh từ' },
            { id: 6, word: 'màu cam', url: 'https://youtu.be/Wt4p6qWgR1k', type: 'danh từ' },
            { id: 7, word: 'màu đen', url: 'https://youtu.be/O5_4x8p5t4U', type: 'danh từ' },
            { id: 8, word: 'màu vàng', url: 'https://youtu.be/IjOjCvwsuAk', type: 'danh từ' },
            { id: 9, word: 'màu bạc', url: 'https://youtu.be/Yi52SqYnlJE', type: 'danh từ' }
        ]
    },
    {
        name: 'Trái cây',
        id: 2,
        target: 'Study',
        data: [
            { id: 11, word: 'quả chuối', url: 'https://youtu.be/4yKyCDC-Tdc', type: 'danh từ' },
            { id: 12, word: 'quả chanh', url: 'https://youtu.be/TIYO3ae3nQg', type: 'danh từ' },
            { id: 13, word: 'quả nho', url: 'https://youtu.be/NZ68mfHiZa8', type: 'danh từ' },
            { id: 14, word: 'quả lê', url: 'https://youtu.be/FoRAeYTyrFk', type: 'danh từ' },
            { id: 15, word: 'quả táo', url: 'https://youtu.be/3wIiujOP6Ag', type: 'danh từ' }
        ]
    },
    {
        name: 'Thức ăn',
        id: 3,
        target: 'Study',
        data: [
            { id: 16, word: 'pizza', url: 'https://youtu.be/XIZ2DrdEU3k', type: 'danh từ' },
            { id: 17, word: 'hộp sữa', url: 'https://youtu.be/quk_XoRtZWk', type: 'danh từ' },
            { id: 18, word: 'hamburger', url: 'https://youtu.be/IIt5fF-D6d0', type: 'danh từ' },
            { id: 19, word: 'trứng', url: 'https://youtu.be/uEvKmWqFE-4', type: 'danh từ' },
            { id: 20, word: 'kẹo', url: 'https://youtu.be/EfJ4xLiX5IA', type: 'danh từ' }
        ]
    },
    {
        name: 'Công việc',
        id: 4,
        target: 'Study',
        data: [
            { id: 21, word: 'nhân viên', url: 'https://youtu.be/akaN6CRjpt0', type: 'danh từ' },
            { id: 22, word: 'nghệ sĩ', url: 'https://youtu.be/jORXCych9Q4', type: 'danh từ' },
            { id: 23, word: 'kiến trúc sư ( kĩ sư, thiết kế )', url: 'https://youtu.be/YJJQUuKfcpQ', type: 'danh từ' },
            { id: 24, word: 'kiến trúc sư ( nhà cửa )', url: 'https://youtu.be/JAp9aao8ciU', type: 'danh từ' },
            { id: 25, word: 'đạo diễn', url: 'https://youtu.be/f5yud3flnAQ', type: 'danh từ' }
        ]
    },
    {
        name: 'Động vật',
        id: 5,
        target: 'Study',
        data: [
            { id: 26, word: 'con mèo', url: 'https://youtu.be/ekFrFoJ-x78', type: 'danh từ' },
            { id: 27, word: 'con chó', url: 'https://youtu.be/IbpJtH_QssM', type: 'danh từ' },
            { id: 28, word: 'con chim', url: 'https://youtu.be/Bibgy-yjgYE', type: 'danh từ' },
            { id: 29, word: 'con ngựa', url: 'https://youtu.be/xCJGQseQ3Fw', type: 'danh từ' },
            { id: 30, word: 'con bò', url: 'https://youtu.be/I2_nB2cXP58', type: 'danh từ' },
            { id: 31, word: 'con cừu', url: 'https://youtu.be/0sF9ZKAYAwo', type: 'danh từ' },
            { id: 32, word: 'con lợn', url: 'https://youtu.be/WaW7OJUi_nc', type: 'danh từ' },
            { id: 33, word: 'sâu bọ, côn trùng', url: 'https://youtu.be/a-COvvqJXe8', type: 'danh từ' }
        ]
    },
    {
        name: 'Thời gian',
        id: 6,
        target: 'Study',
        data: [
            { id: 34, word: 'ban ngày', url: 'https://youtu.be/6Ag2Q2J9DAU', type: 'danh từ' },
            { id: 35, word: 'ban đêm', url: 'https://youtu.be/jNiRlzvjd5U', type: 'danh từ' },
            { id: 36, word: 'tuần', url: 'https://youtu.be/N6giWOcMj2U', type: 'danh từ' },
            { id: 37, word: 'tháng', url: 'https://youtu.be/YLuGuPS6NU8', type: 'danh từ' },
            { id: 38, word: 'tương lai', url: 'https://youtu.be/RMUZFdu6VtI', type: 'danh từ' },
            { id: 39, word: 'mùa xuân', url: 'https://youtu.be/5h69GQntuhw', type: 'danh từ' },
            { id: 40, word: 'mùa hạ', url: 'https://youtu.be/AaXReP9YjVE', type: 'danh từ' },
            { id: 41, word: 'mùa thu', url: 'https://youtu.be/g_DZl3jIAbY', type: 'danh từ' },
            { id: 42, word: 'mùa đông', url: 'https://youtu.be/9bLENg2AXrY', type: 'danh từ' }
        ]
    },
    {
        name: 'Gia đình',
        id: 7,
        target: 'Study',
        data: [
            {
                id: 43,
                word: 'mẹ',
                url: 'https://youtu.be/DHl2-NT3mIM',
                type: 'danh từ'
            },
            {
                id: 44,
                word: 'bố',
                url: 'https://youtu.be/1Vllc4F5ic0',
                type: 'danh từ'
            },
            {
                id: 45,
                word: 'chú',
                url: 'https://youtu.be/PqtMCA2lu9w',
                type: 'danh từ'
            }
        ]
    }
]

const ReviseData_en = [
    {
        name: 'Màu sắc',
        id: 1,
        target: 'Revise',
        data: [
            {
                id: 1,
                word: 'màu xanh da trời',
                type: 'danh từ',
                urlVideo: 'https://youtu.be/t2T1_LMVTp8',
                question: 'Đây là màu sắc nào?',
                answer: {
                    answerA: 'màu xanh lá cây',
                    answerB: 'màu đỏ',
                    answerC: 'màu trắng',
                    answerD: 'màu xanh da trời'
                },
                correctAnswer: 'màu xanh da trời'
            },
            {
                id: 2,
                word: 'màu xanh lá cây',
                type: 'danh từ',
                urlVideo: 'https://youtu.be/WrkXE5l6udM',
                question: 'Đây là màu sắc nào?',
                answer: {
                    answerA: 'màu xanh lá cây',
                    answerB: 'màu đen',
                    answerC: 'màu cam',
                    answerD: 'màu nâu'
                },
                correctAnswer: 'màu xanh lá cây'
            },
            {
                id: 3,
                word: 'màu trắng',
                type: 'danh từ',
                urlVideo: 'https://youtu.be/uLjkLwFvFtw',
                question: 'Đây là màu sắc nào?',
                answer: {
                    answerA: 'màu đỏ',
                    answerB: 'màu cam',
                    answerC: 'màu trắng',
                    answerD: 'màu đen'
                },
                correctAnswer: 'màu trắng'
            },
            {
                id: 4,
                word: 'màu đỏ',
                type: 'danh từ',
                urlVideo: 'https://youtu.be/lDBvf8SoQuc',
                question: 'Đây là màu sắc nào?',
                answer: {
                    answerA: 'màu đỏ',
                    answerB: 'màu xanh lá cây',
                    answerC: 'màu trắng',
                    answerD: 'màu nâu'
                },
                correctAnswer: 'màu đỏ'
            },
            {
                id: 5,
                word: 'màu nâu',
                type: 'danh từ',
                urlVideo: 'https://youtu.be/HGBcts4shKw',
                question: 'Đây là màu sắc nào?',
                answer: {
                    answerA: 'màu đen',
                    answerB: 'màu nâu',
                    answerC: 'màu xanh da trời',
                    answerD: 'màu cam'
                },
                correctAnswer: 'màu nâu'
            },
            {
                id: 6,
                word: 'màu cam',
                type: 'danh từ',
                urlVideo: 'https://youtu.be/Wt4p6qWgR1k',
                question: 'Đây là màu sắc nào?',
                answer: {
                    answerA: 'màu cam',
                    answerB: 'màu đỏ',
                    answerC: 'màu trắng',
                    answerD: 'màu xanh lá cây'
                },
                correctAnswer: 'màu cam'
            },
            {
                id: 7,
                word: 'màu đen',
                type: 'danh từ',
                urlVideo: 'https://youtu.be/O5_4x8p5t4U',
                question: 'Đây là màu sắc nào?',
                answer: {
                    answerA: 'màu đen',
                    answerB: 'màu trắng',
                    answerC: 'màu đỏ',
                    answerD: 'màu cam'
                },
                correctAnswer: 'màu đen'
            },
            {
                id: 8,
                word: 'màu vàng',
                type: 'danh từ',
                urlVideo: 'https://youtu.be/IjOjCvwsuAk',
                question: 'Đây là màu sắc nào?',
                answer: {
                    answerA: 'màu vàng',
                    answerB: 'màu trắng',
                    answerC: 'màu cam',
                    answerD: 'màu xanh lá cây'
                },
                correctAnswer: 'màu vàng'
            },
            {
                id: 9,
                word: 'màu bạc',
                type: 'danh từ',
                urlVideo: 'https://youtu.be/Yi52SqYnlJE',
                question: 'Đây là màu sắc nào?',
                answer: {
                    answerA: 'màu bạc',
                    answerB: 'màu vàng',
                    answerC: 'màu xanh da trời',
                    answerD: 'màu nâu'
                },
                correctAnswer: 'màu bạc'
            }
        ]
    },
    {
        name: 'Trái cây',
        id: 2,
        target: 'Revise',
        data: [
            {
                id: 11,
                word: 'quả chuối',
                type: 'danh từ',
                urlVideo: 'https://youtu.be/4yKyCDC-Tdc',
                question: 'Đây là loại trái cây nào?',
                answer: {
                    answerA: 'quả táo',
                    answerB: 'quả chuối',
                    answerC: 'quả lê',
                    answerD: 'quả chanh'
                },
                correctAnswer: 'quả chuối'
            },
            {
                id: 12,
                word: 'quả chanh',
                type: 'danh từ',
                urlVideo: 'https://youtu.be/TIYO3ae3nQg',
                question: 'Đây là loại trái cây nào?',
                answer: {
                    answerA: 'quả chanh',
                    answerB: 'quả nho',
                    answerC: 'quả táo',
                    answerD: 'quả lê'
                },
                correctAnswer: 'quả chanh'
            },
            {
                id: 13,
                word: 'quả nho',
                type: 'danh từ',
                urlVideo: 'https://youtu.be/NZ68mfHiZa8',
                question: 'Đây là loại trái cây nào?',
                answer: {
                    answerA: 'quả nho',
                    answerB: 'quả cam',
                    answerC: 'quả chuối',
                    answerD: 'quả táo'
                },
                correctAnswer: 'quả nho'
            },
            {
                id: 14,
                word: 'quả lê',
                type: 'danh từ',
                urlVideo: 'https://youtu.be/FoRAeYTyrFk',
                question: 'Đây là loại trái cây nào?',
                answer: {
                    answerA: 'quả lê',
                    answerB: 'quả chuối',
                    answerC: 'quả cam',
                    answerD: 'quả nho'
                },
                correctAnswer: 'quả lê'
            },
            {
                id: 15,
                word: 'quả táo',
                type: 'danh từ',
                urlVideo: 'https://youtu.be/3wIiujOP6Ag',
                question: 'Đây là loại trái cây nào?',
                answer: {
                    answerA: 'quả cam',
                    answerB: 'quả chuối',
                    answerC: 'quả táo',
                    answerD: 'quả nho'
                },
                correctAnswer: 'quả táo'
            }
        ]
    },
    {
        name: 'Thức ăn',
        id: 3,
        target: 'Revise',
        data: [
            {
                id: 16,
                word: 'pizza',
                type: 'danh từ',
                urlVideo: 'https://youtu.be/XIZ2DrdEU3k',
                question: 'Đây là loại thức ăn nào?',
                answer: {
                    answerA: 'pizza',
                    answerB: 'hamburger',
                    answerC: 'hộp sữa',
                    answerD: 'trứng'
                },
                correctAnswer: 'pizza'
            },
            {
                id: 17,
                word: 'hộp sữa',
                type: 'danh từ',
                urlVideo: 'https://youtu.be/quk_XoRtZWk',
                question: 'Đây là loại thức ăn nào?',
                answer: {
                    answerA: 'hộp sữa',
                    answerB: 'trứng',
                    answerC: 'pizza',
                    answerD: 'kẹo'
                },
                correctAnswer: 'hộp sữa'
            },
            {
                id: 18,
                word: 'hamburger',
                type: 'danh từ',
                urlVideo: 'https://youtu.be/IIt5fF-D6d0',
                question: 'Đây là loại thức ăn nào?',
                answer: {
                    answerA: 'hamburger',
                    answerB: 'pizza',
                    answerC: 'trứng',
                    answerD: 'kẹo'
                },
                correctAnswer: 'hamburger'
            },
            {
                id: 19,
                word: 'trứng',
                type: 'danh từ',
                urlVideo: 'https://youtu.be/uEvKmWqFE-4',
                question: 'Đây là loại thức ăn nào?',
                answer: {
                    answerA: 'trứng',
                    answerB: 'pizza',
                    answerC: 'hamburger',
                    answerD: 'kẹo'
                },
                correctAnswer: 'trứng'
            },
            {
                id: 20,
                word: 'kẹo',
                type: 'danh từ',
                urlVideo: 'https://youtu.be/EfJ4xLiX5IA',
                question: 'Đây là loại thức ăn nào?',
                answer: {
                    answerA: 'kẹo',
                    answerB: 'pizza',
                    answerC: 'hộp sữa',
                    answerD: 'trứng'
                },
                correctAnswer: 'kẹo'
            }
        ]
    },
    {
        name: 'Công việc',
        id: 4,
        target: 'Revise',
        data: [
            {
                id: 21,
                word: 'nhân viên',
                type: 'danh từ',
                urlVideo: 'https://youtu.be/akaN6CRjpt0',
                question: 'Đây là nghề gì?',
                answer: {
                    answerA: 'nhân viên',
                    answerB: 'nghệ sĩ',
                    answerC: 'kiến trúc sư',
                    answerD: 'đạo diễn'
                },
                correctAnswer: 'nhân viên'
            },
            {
                id: 22,
                word: 'nghệ sĩ',
                type: 'danh từ',
                urlVideo: 'https://youtu.be/jORXCych9Q4',
                question: 'Đây là nghề gì?',
                answer: {
                    answerA: 'nghệ sĩ',
                    answerB: 'nhân viên',
                    answerC: 'kiến trúc sư',
                    answerD: 'đạo diễn'
                },
                correctAnswer: 'nghệ sĩ'
            },
            {
                id: 23,
                word: 'kiến trúc sư (kĩ sư, thiết kế)',
                type: 'danh từ',
                urlVideo: 'https://youtu.be/YJJQUuKfcpQ',
                question: 'Đây là nghề gì?',
                answer: {
                    answerA: 'kiến trúc sư (kĩ sư, thiết kế)',
                    answerB: 'nhân viên',
                    answerC: 'nghệ sĩ',
                    answerD: 'đạo diễn'
                },
                correctAnswer: 'kiến trúc sư (kĩ sư, thiết kế)'
            },
            {
                id: 24,
                word: 'kiến trúc sư (nhà cửa)',
                type: 'danh từ',
                urlVideo: 'https://youtu.be/JAp9aao8ciU',
                question: 'Đây là nghề gì?',
                answer: {
                    answerA: 'kiến trúc sư (nhà cửa)',
                    answerB: 'nghệ sĩ',
                    answerC: 'nhân viên',
                    answerD: 'đạo diễn'
                },
                correctAnswer: 'kiến trúc sư (nhà cửa)'
            },
            {
                id: 25,
                word: 'đạo diễn',
                type: 'danh từ',
                urlVideo: 'https://youtu.be/f5yud3flnAQ',
                question: 'Đây là nghề gì?',
                answer: {
                    answerA: 'đạo diễn',
                    answerB: 'nhân viên',
                    answerC: 'nghệ sĩ',
                    answerD: 'kiến trúc sư'
                },
                correctAnswer: 'đạo diễn'
            }
        ]
    },
    {
        name: 'Động vật',
        id: 5,
        target: 'Revise',
        data: [
            {
                id: 26,
                word: 'con mèo',
                type: 'danh từ',
                urlVideo: 'https://youtu.be/ekFrFoJ-x78',
                question: 'Đây là động vật gì?',
                answer: {
                    answerA: 'con chó',
                    answerB: 'con mèo',
                    answerC: 'con chim',
                    answerD: 'con bò'
                },
                correctAnswer: 'con mèo'
            },
            {
                id: 27,
                word: 'con chó',
                type: 'danh từ',
                urlVideo: 'https://youtu.be/IbpJtH_QssM',
                question: 'Đây là động vật gì?',
                answer: {
                    answerA: 'con mèo',
                    answerB: 'con chó',
                    answerC: 'con ngựa',
                    answerD: 'con cừu'
                },
                correctAnswer: 'con chó'
            },
            {
                id: 28,
                word: 'con chim',
                type: 'danh từ',
                urlVideo: 'https://youtu.be/Bibgy-yjgYE',
                question: 'Đây là động vật gì?',
                answer: {
                    answerA: 'con chim',
                    answerB: 'con mèo',
                    answerC: 'con bò',
                    answerD: 'con cừu'
                },
                correctAnswer: 'con chim'
            },
            {
                id: 29,
                word: 'con ngựa',
                type: 'danh từ',
                urlVideo: 'https://youtu.be/xCJGQseQ3Fw',
                question: 'Đây là động vật gì?',
                answer: {
                    answerA: 'con ngựa',
                    answerB: 'con chó',
                    answerC: 'con mèo',
                    answerD: 'con lợn'
                },
                correctAnswer: 'con ngựa'
            },
            {
                id: 30,
                word: 'con bò',
                type: 'danh từ',
                urlVideo: 'https://youtu.be/I2_nB2cXP58',
                question: 'Đây là động vật gì?',
                answer: {
                    answerA: 'con bò',
                    answerB: 'con cừu',
                    answerC: 'con ngựa',
                    answerD: 'con mèo'
                },
                correctAnswer: 'con bò'
            },
            {
                id: 31,
                word: 'con cừu',
                type: 'danh từ',
                urlVideo: 'https://youtu.be/0sF9ZKAYAwo',
                question: 'Đây là động vật gì?',
                answer: {
                    answerA: 'con cừu',
                    answerB: 'con bò',
                    answerC: 'con lợn',
                    answerD: 'con mèo'
                },
                correctAnswer: 'con cừu'
            },
            {
                id: 32,
                word: 'con lợn',
                type: 'danh từ',
                urlVideo: 'https://youtu.be/WaW7OJUi_nc',
                question: 'Đây là động vật gì?',
                answer: {
                    answerA: 'con lợn',
                    answerB: 'con cừu',
                    answerC: 'con bò',
                    answerD: 'con mèo'
                },
                correctAnswer: 'con lợn'
            },
            {
                id: 33,
                word: 'sâu bọ, côn trùng',
                type: 'danh từ',
                urlVideo: 'https://youtu.be/a-COvvqJXe8',
                question: 'Đây là động vật gì?',
                answer: {
                    answerA: 'sâu bọ, côn trùng',
                    answerB: 'con mèo',
                    answerC: 'con bò',
                    answerD: 'con chó'
                },
                correctAnswer: 'sâu bọ, côn trùng'
            }
        ]
    },
    {
        name: 'Thời gian',
        id: 6,
        target: 'Revise',
        data: [
            {
                id: 34,
                word: 'ban ngày',
                type: 'danh từ',
                urlVideo: 'https://youtu.be/6Ag2Q2J9DAU',
                question: 'Đây là thời gian nào?',
                answer: {
                    answerA: 'ban ngày',
                    answerB: 'ban đêm',
                    answerC: 'tuần',
                    answerD: 'tháng'
                },
                correctAnswer: 'ban ngày'
            },
            {
                id: 35,
                word: 'ban đêm',
                type: 'danh từ',
                urlVideo: 'https://youtu.be/jNiRlzvjd5U',
                question: 'Đây là thời gian nào?',
                answer: {
                    answerA: 'ban ngày',
                    answerB: 'ban đêm',
                    answerC: 'tuần',
                    answerD: 'tháng'
                },
                correctAnswer: 'ban đêm'
            }, {
                id: 36,
                word: 'tuần',
                type: 'danh từ',
                urlVideo: 'https://youtu.be/N6giWOcMj2U',
                question: 'Đây là thời gian nào?',
                answer: {
                    answerA: 'tuần',
                    answerB: 'tháng',
                    answerC: 'mùa xuân',
                    answerD: 'ban ngày'
                },
                correctAnswer: 'tuần'
            },
            {
                id: 37,
                word: 'tháng',
                type: 'danh từ',
                urlVideo: 'https://youtu.be/YLuGuPS6NU8',
                question: 'Đây là thời gian nào?',
                answer: {
                    answerA: 'tháng',
                    answerB: 'tuần',
                    answerC: 'mùa hạ',
                    answerD: 'ban đêm'
                },
                correctAnswer: 'tháng'
            },
            {
                id: 38,
                word: 'tương lai',
                type: 'danh từ',
                urlVideo: 'https://youtu.be/RMUZFdu6VtI',
                question: 'Đây là thời gian nào?',
                answer: {
                    answerA: 'tương lai',
                    answerB: 'mùa thu',
                    answerC: 'mùa đông',
                    answerD: 'mùa xuân'
                },
                correctAnswer: 'tương lai'
            },
            {
                id: 39,
                word: 'mùa xuân',
                type: 'danh từ',
                urlVideo: 'https://youtu.be/5h69GQntuhw',
                question: 'Đây là thời gian nào?',
                answer: {
                    answerA: 'mùa xuân',
                    answerB: 'mùa hạ',
                    answerC: 'mùa thu',
                    answerD: 'mùa đông'
                },
                correctAnswer: 'mùa xuân'
            },
            {
                id: 40,
                word: 'mùa hạ',
                type: 'danh từ',
                urlVideo: 'https://youtu.be/AaXReP9YjVE',
                question: 'Đây là thời gian nào?',
                answer: {
                    answerA: 'mùa hạ',
                    answerB: 'mùa thu',
                    answerC: 'mùa đông',
                    answerD: 'tương lai'
                },
                correctAnswer: 'mùa hạ'
            },
            {
                id: 41,
                word: 'mùa thu',
                type: 'danh từ',
                urlVideo: 'https://youtu.be/g_DZl3jIAbY',
                question: 'Đây là thời gian nào?',
                answer: {
                    answerA: 'mùa thu',
                    answerB: 'mùa xuân',
                    answerC: 'mùa hạ',
                    answerD: 'mùa đông'
                },
                correctAnswer: 'mùa thu'
            },
            {
                id: 42,
                word: 'mùa đông',
                type: 'danh từ',
                urlVideo: 'https://youtu.be/9bLENg2AXrY',
                question: 'Đây là thời gian nào?',
                answer: {
                    answerA: 'mùa đông',
                    answerB: 'mùa xuân',
                    answerC: 'mùa hạ',
                    answerD: 'ban đêm'
                },
                correctAnswer: 'mùa đông'
            }
        ]
    },
    {
        name: 'Gia đình',
        id: 7,
        target: 'Revise',
        data: [
            {
                id: 43,
                word: 'mẹ',
                type: 'danh từ',
                urlVideo: 'https://youtu.be/DHl2-NT3mIM',
                question: 'Đây là ai trong gia đình?',
                answer: {
                    answerA: 'mẹ',
                    answerB: 'bố',
                    answerC: 'chú',
                    answerD: 'cô'
                },
                correctAnswer: 'mẹ'
            },
            {
                id: 44,
                word: 'bố',
                type: 'danh từ',
                urlVideo: 'https://youtu.be/1Vllc4F5ic0',
                question: 'Đây là ai trong gia đình?',
                answer: {
                    answerA: 'bố',
                    answerB: 'mẹ',
                    answerC: 'chú',
                    answerD: 'cô'
                },
                correctAnswer: 'bố'
            },
            {
                id: 45,
                word: 'chú',
                type: 'danh từ',
                urlVideo: 'https://youtu.be/PqtMCA2lu9w',
                question: 'Đây là ai trong gia đình?',
                answer: {
                    answerA: 'chú',
                    answerB: 'bố',
                    answerC: 'mẹ',
                    answerD: 'cô'
                },
                correctAnswer: 'chú'
            }
        ]
    }
];

