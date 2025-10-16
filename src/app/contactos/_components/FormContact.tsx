"use client"

import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { bgArrendamento } from '@/lib/constants';

interface FormData {
    name: string;
    email: string;
    telefone: string;
    assunto: string;
    mensagem: string;
}
const FormContact = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        telefone: '',
        assunto: '',
        mensagem: '',
    });

    const [wordCount, setWordCount] = useState(0);
    const maxWords = 250;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        if (name === 'mensagem') {
            const words = value.trim() === '' ? 0 : value.trim().split(/\s+/).length;
            setWordCount(words);

            if (words > maxWords) {
                return;
            }
        }

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.assunto || !formData.mensagem) {
            toast.error('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        if (wordCount > maxWords) {
            toast.error(`A mensagem não pode exceder ${maxWords} palavras.`);
            return;
        }

        if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            toast.error('Por favor, insira um email válido.');
            return;
        }

        const loadingToast = toast.loading('Enviando mensagem...');

        try {
            const response = await axios.post(
                'https://cpme.pt/lp/sendmail.php',
                new URLSearchParams(formData as any),
                { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
            );

            toast.dismiss(loadingToast);

            if (response.data.success) {
                toast.success('Mensagem enviada com sucesso!');
                setFormData({
                    name: '',
                    email: '',
                    telefone: '',
                    assunto: '',
                    mensagem: '',
                });
                setWordCount(0);
            } else {
                toast.error(response.data.message || 'Erro ao enviar mensagem.');
            }
        } catch (error) {
            toast.dismiss(loadingToast);
            toast.error('Erro ao conectar com o servidor. Por favor, tente novamente mais tarde.');
            console.error('Erro ao enviar formulário:', error);
        }
    };


    return (
        <section id="formContact" className='relative overflow-hidden w-full max-w-container mx-auto bg-[80%_center] xl:bg-[center_top] bg-cover bg-no-repeat py-20'
            style={{
                backgroundImage: `url(${bgArrendamento})`,
            }}
        >
            <div className='max-w-screen-xl flex flex-col justify-between items-start mx-auto p-6 space-y-14'>
                <h3 className="font-medium text-default text-3xl sm:text-4xl">Preencha o formulário e torne-se associado</h3>

                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-screen-md py-6"
                >
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-primary text-xs font-medium mb-2">
                            Nome
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-3 py-1 text-sm border-b border-default focus:outline-none"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-primary text-xs font-medium mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-1 text-sm border-b border-default focus:outline-none"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="telefone" className="block text-primary text-xs font-medium mb-2">
                            Telefone
                        </label>
                        <input
                            type="tel"
                            id="telefone"
                            name="telefone"
                            value={formData.telefone}
                            onChange={handleChange}
                            className="w-full px-3 py-1 text-sm border-b border-default focus:outline-none"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="assunto" className="block text-primary text-xs font-medium mb-2">
                            Assunto
                        </label>
                        <input
                            type="text"
                            id="assunto"
                            name="assunto"
                            value={formData.assunto}
                            onChange={handleChange}
                            className="w-full px-3 py-1 text-sm border-b border-default focus:outline-none"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="mensagem" className="block text-primary text-xs font-medium mb-2">
                            Mensagem
                        </label>
                        <textarea
                            id="mensagem"
                            name="mensagem"
                            value={formData.mensagem}
                            onChange={handleChange}
                            rows={2}
                            className="w-full px-3 py-1 text-sm border-b border-default resize-none focus:outline-none"
                            required
                        />
                        <div className="flex justify-end items-center text-xs mt-1" style={{ color: wordCount > maxWords ? 'red' : 'gray' }}>
                            {wordCount}/{maxWords} palavras
                        </div>
                    </div>

                    <div className="flex justify-end items-center mb-4 text-xs text-gray-600">
                        Todos os campos são obrigatórios
                    </div>

                    <button
                        type="submit"
                        className="w-full max-w-36 bg-primary text-white text-sm font-semibold py-1.5 px-4 rounded-xl"
                    >
                        Enviar pedido
                    </button>
                </form>
            </div>
        </section>

    )
}

export default FormContact