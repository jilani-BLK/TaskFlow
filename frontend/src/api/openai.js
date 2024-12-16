import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
    apiKey: 'TON_API_KEY', // Remplace par ta clé OpenAI
});

const openai = new OpenAIApi(configuration);

export const generateTasks = async (userPrompt) => {
    try {
        const response = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: `Génère un tableau de tâches basé sur cette description : "${userPrompt}". Chaque tâche doit inclure un titre, une priorité, une catégorie et une date limite.`,
            max_tokens: 150,
        });

        // Traite et renvoie les données générées par l'IA
        const tasks = JSON.parse(response.data.choices[0].text.trim());
        return tasks;
    } catch (error) {
        console.error('Erreur lors de la génération des tâches avec OpenAI :', error);
        return [];
    }
};