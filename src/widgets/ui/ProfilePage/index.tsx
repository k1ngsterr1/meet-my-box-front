import Button from "@shared/ui/Button/ui/button";
import styles from "./styles.module.scss";

export const ProfilePage = () => {
  return (
    <main className={`${styles.profile_page} p-6 bg-blue-50`}>
      <h1 className="font-bold text-xl mb-4">Профиль клиента</h1>
      <hr className="bg-main border-2 border-main rounded-full mb-6" />
      <form className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="mb-1 text-gray-700">Фамилия</label>
          <input
            type="text"
            className="p-2 border border-gray-300 rounded"
            placeholder="Ваша фамилия"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 text-gray-700">Имя</label>
          <input
            type="text"
            className="p-2 border border-gray-300 rounded"
            placeholder="Ваше имя"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 text-gray-700">Фамилия на латинице</label>
          <input
            type="text"
            className="p-2 border border-gray-300 rounded"
            placeholder="Фамилия на латинице"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 text-gray-700">Имя на латинице</label>
          <input
            type="text"
            className="p-2 border border-gray-300 rounded"
            placeholder="Имя на латинице"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 text-gray-700">
            Номер мобильного телефона с кодом страны
          </label>
          <input
            type="text"
            className="p-2 border border-gray-300 rounded"
            placeholder="87759932587"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 text-gray-700">Ваш e-mail</label>
          <input
            type="email"
            className="p-2 border border-gray-300 rounded"
            placeholder="example@gmail.com"
            readOnly
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 text-gray-700">Индекс</label>
          <input
            type="text"
            className="p-2 border border-gray-300 rounded"
            placeholder="000000"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 text-gray-700">Страна</label>
          <input
            type="text"
            className="p-2 border border-gray-300 rounded"
            placeholder="Ваша Страна"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 text-gray-700">Город/населенный пункт</label>
          <input
            type="text"
            className="p-2 border border-gray-300 rounded"
            placeholder="Ваш Город"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 text-gray-700">Улица</label>
          <input
            type="text"
            className="p-2 border border-gray-300 rounded"
            placeholder="Ваша Улица"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 text-gray-700">Дом</label>
          <input
            type="text"
            className="p-2 border border-gray-300 rounded"
            placeholder="Номер вашего дома"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 text-gray-700">Квартира</label>
          <input
            type="text"
            className="p-2 border border-gray-300 rounded"
            placeholder="Номер квартиры"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 text-gray-700">Имя на домофоне</label>
          <input
            type="text"
            className="p-2 border border-gray-300 rounded"
            placeholder="Код домофона"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 text-gray-700">WhatsApp</label>
          <input
            type="text"
            className="p-2 border border-gray-300 rounded"
            placeholder="Ваш WhatsApp"
          />
        </div>
        <Button type="submit" buttonType="filled" text="Сохранить" />
      </form>
    </main>
  );
};
