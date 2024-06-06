from aiogram import Bot, Dispatcher, executor, types
from aiogram.types.web_app_info import WebAppInfo

bot = Bot('5712420516:AAEsxIOuoHmwrMwhnNfV4MjnF57DwEDOSJs')
dp = Dispatcher(bot)

@dp.message_handler(commands=['start'])
async def start(message: types.Message):
    markup = types.InlineKeyboardMarkup()
    markup.add(types.InlineKeyboardButton('Открыть веб страницу', web_app=WebAppInfo(url='https://www.youtube.com/')))
    await message.reply("Нажмите кнопку ниже, чтобы открыть веб-страницу", reply_markup=markup)

executor.start_polling(dp)
