export interface FileData {
    fileName: string
    phoneNumber: string
    date: string
    downloadUrl: string
}

/**
 * 파일 데이터 생성.
 */
const createFileData = (
    fileName: string,
    phoneNumber: string,
    date: string,
    downloadUrl: string,
): FileData => {
    return {
        fileName,
        phoneNumber,
        date,
        downloadUrl
    }
}

export { createFileData }


/**
 * const rows = [
 *     createData('RecorderLog_20230410', '#'),
 *     createData('log_20230410', '#'),
 * ]
 */
